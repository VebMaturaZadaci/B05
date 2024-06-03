document.addEventListener('DOMContentLoaded', function() {
    const instrumentImages = document.querySelectorAll('.instrument-image');
    const soundIcons = document.querySelectorAll('.sound-icon');
    const moreInfoLinks = document.querySelectorAll('.more-info');

    instrumentImages.forEach(img => {
        img.addEventListener('click', function() {
            window.open(this.dataset.url, '_blank');
        });
    });

    soundIcons.forEach(icon => {
        icon.addEventListener('mouseenter', (e) => {
            const soundSrc = e.target.getAttribute('data-sound');
            const audio = new Audio(soundSrc);
            audio.play();
            e.target.addEventListener('mouseleave', () => {
                audio.pause();
            });
        });
    });

    moreInfoLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Додатне информације о групи инструмената.');
        });
    });
});