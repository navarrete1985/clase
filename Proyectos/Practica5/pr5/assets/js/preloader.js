
AOS.refresh();
AOS.init();
window.onbeforeunload = function(event) {
  AOS.refreshHard()
}
if (document.getElementsByClassName('rellax').length > 0) {
  var rellax = new Rellax('.rellax');
}
(function(){ 
  document.body.style.overflow = 'hidden';
  let elements = document.querySelectorAll('section.preloader .cols .col');
  let count = 0.1;

  Array.from(elements).forEach(item => {
    item.style.transitionDelay = `${count}s`;
    count += 0.05;
  })
  
  let active = document.querySelector('.preloader.active');
  if (active !== undefined && active !== null) {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        let el = document.querySelector('#rhv2w');
        let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1});
        myAnimation.on('complete', () => {
          closeWindow();
        });
        myAnimation.paint(); 
      }
    }
  }else {
    closeWindow();
  }

  function closeWindow() {
    document.querySelector('.preloader .pre-wrapper').classList.add('pre-hidden');
    window.setTimeout(() => {
      document.querySelector('.preloader').classList.add('to-back');
      document.body.style.overflow = 'auto';
    }, 1300);
    Array.from(elements).forEach(item => {
      item.classList.add('pre-dissapear');
    })
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

  async function move() {
      for (let item of li) {
          await new Promise((resolve) => setTimeout( () => {
              item.classList.toggle('show');
              resolve();
          }, 70)); 
      }
  }
})();

(function() {
  if (document.querySelector('nav.scroll-hidden') !== null) {
    let ico = document.querySelector('header .ico');
    let ul = document.querySelector('nav ul');
    ul.classList.add('disappear-ul-nav');
    let big = true;
    window.addEventListener('scroll', event => {
      var width = window.innerWidth
                  || document.documentElement.clientWidth
                  || document.body.clientWidth;
      
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 50) {
        ico.classList.add('resize-ico');
        ul.classList.remove('disappear-ul-nav');
        big = false;
      }else if (!big && width > 1100) {
        ico.classList.remove('resize-ico');
        ul.classList.add('disappear-ul-nav');
        big = true;
      }
    })
  }
})();

(function() {
  if (document.querySelectorAll('.gallery .img').length > 0) {
    var lightboxDescription = GLightbox({
      selector: 'glightbox'
    });
  }
})();