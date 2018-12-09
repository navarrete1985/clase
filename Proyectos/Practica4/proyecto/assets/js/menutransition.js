(function(){
    
    let menu = document.getElementById('nav-ico');
    let menuUl = document.querySelector('nav .content ul');
    let li = document.querySelectorAll('nav .content ul li');

    menu.addEventListener('click', event => {
        menu.classList.toggle('open');
        menuUl.classList.toggle('visible');
        window.setTimeout(move, 170);
    });

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