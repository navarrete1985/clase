(function(){
    let element = document.querySelector('header nav');
    let menu = document.getElementById('nav-ico');
    let menuUl = document.querySelector('nav .content ul');
    let li = document.querySelectorAll('nav .content ul li');

    document.addEventListener('scroll', event => {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            element.classList.add('shape-nav');
        }
    });

    menu.addEventListener('click', event => {
        menu.classList.toggle('open');
        menuUl.classList.toggle('visible');
        window.setTimeout(move, 170);
    });

    window.addEventListener('load', event => {
        let uri = './assets/videos/vid?.mp4';
        let video = document.querySelector('header .video-wrap video');
        if (video !== null) {
            video.setAttribute('src', uri.replace('?', random(1,3)));
            video.play();
        }
    })

    /**
     * 
     * @param {number} desde Número desde para generar aleatorio (incluido)
     * @param {number} hasta Número hasta para la generación (incluido)
     */
    function random (desde, hasta) {
        hasta++;
        return Math.floor(Math.random() * (hasta - desde)) + desde;
    }

    /**
     * Función que se encarga colocar cada li en su posición al hacer click
     * en el btn del menú, obteniendo la animación deseada
     */
    async function move() {
        for (let item of li) {
            await new Promise((resolve) => setTimeout( () => {
                item.classList.toggle('show');
                resolve();
            }, 70)); 
        }
    }
})();