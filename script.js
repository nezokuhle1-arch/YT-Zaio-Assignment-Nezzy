// ── Category filter ──────────────────────────────────────────────────────────
const chips = document.querySelectorAll('.category-chip');
const cards = document.querySelectorAll('.video-card');

chips.forEach(chip => {
    chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const filter = chip.dataset.filter;

        cards.forEach(card => {
            const match = filter === 'All' || card.dataset.category === filter;
            card.style.display = match ? '' : 'none';
        });
    });
});

// ── Hover video preview ───────────────────────────────────────────────────────
document.querySelectorAll('.thumbnail-container').forEach(container => {
    const video = container.querySelector('.preview-video');
    if (!video) return;

    container.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
    });

    container.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});
