document.addEventListener('DOMContentLoaded', function() {
    const instrumentImages = document.querySelectorAll('.instrument-image');
    const soundIcons = document.querySelectorAll('.sound-icon');
    const moreInfoLinks = document.querySelectorAll('.more-info');

    instrumentImages.forEach(img => {
        img.addEventListener('click', function() {
            window.open(this.dataset.url, '_blank');
        });
    });

});