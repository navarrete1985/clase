(function() {
    Array.from(document.querySelectorAll('section.gallery .img')).forEach(item => {
        addLightbox(item);
    })

    function addLightbox(item) {
        style = item.currentStyle || window.getComputedStyle(item, false),
        bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
        item.querySelector('a').href = bi;
    }
    var lightboxDescription = GLightbox({
        selector: 'glightbox'
    });
})();



// (function() {
//     var media_m = window.matchMedia('(max-width: 900px)');
    

// })