(function(){ 
  let elements = document.querySelectorAll('section.preloader .cols .col');
  let count = 0.1;
  Array.from(elements).forEach(item => {
    item.style.transitionDelay = `${count}s`;
    count += 0.05;
  })
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        let el = document.querySelector('#rhv2w');
        let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1});
        myAnimation.on('complete', () => {
          document.querySelector('.preloader .pre-wrapper').classList.add('pre-hidden');
          document.querySelector('.preloader').classList.add('to-back');
          Array.from(elements).forEach(item => {
            item.classList.add('pre-dissapear');
          })
        });
        myAnimation.paint(); 
      }
    }
})();


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
