const BADGE_MAP = {
    all:     null,
    band:    'badge-band',
    waiters: 'badge-waiters',
    photo:   'badge-photo',
    effects: 'badge-effects',
    kum:     'badge-kum',
};

function applyFilter(value) {
    const badgeClass = BADGE_MAP[value];

    document.querySelectorAll('.tl-team').forEach(team => {
        if (!badgeClass) {
            team.style.display = '';
        } else {
            const hasBadge = team.querySelector('.' + badgeClass);
            team.style.display = hasBadge ? '' : 'none';
        }
    });

    // hide divider if nothing visible above it in the same body
    document.querySelectorAll('.tl-body').forEach(body => {
        const divider = body.querySelector('[data-divider]');
        if (!divider) return;
        const above = divider.previousElementSibling;
        if (!above) return;
        const anyVisible = [...above.querySelectorAll('.tl-team')].some(t => t.style.display !== 'none');
        divider.style.display = anyVisible ? '' : 'none';
    });

    // hide whole card if no visible teams
    document.querySelectorAll('.tl-card').forEach(card => {
        const teams = card.querySelectorAll('.tl-team');
        const anyVisible = [...teams].some(t => t.style.display !== 'none');
        card.style.display = anyVisible ? '' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.seg-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('seg-active'));
            btn.classList.add('seg-active');
            applyFilter(btn.dataset.value);
        });
    });
});
