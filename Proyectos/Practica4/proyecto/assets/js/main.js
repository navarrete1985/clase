(function() {
    let carousel = new Carousel('carouselHeader');
    carousel.startWithInterval();
    document.querySelector('.carousel-info .left').addEventListener('click', (e) => carousel.previous());
    document.querySelector('.carousel-info .right').addEventListener('click', (e) => carousel.next());
})();