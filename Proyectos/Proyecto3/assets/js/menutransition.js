(function(){
    let element = document.querySelector('header nav');
    document.addEventListener('scroll', event => {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            element.classList.add('shape-nav');
        }
    });
})();