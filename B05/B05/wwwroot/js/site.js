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
        icon.addEventListener('mouseenter', function() {
            const sound = new Audio(this.dataset.sound);
            sound.play();
        });
    });

    moreInfoLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Додатне информације о групи инструмената.');
        });
    });
});