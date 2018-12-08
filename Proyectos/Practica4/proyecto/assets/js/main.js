(function() {
    let carousel = new Carousel('carouselHeader');
    carousel.startWithInterval();
    document.querySelector('.carousel-info .left').addEventListener('click', (e) => carousel.previous());
    document.querySelector('.carousel-info .right').addEventListener('click', (e) => carousel.next());

    let natureItems = document.querySelectorAll('section.naturaleza-content .item');
    let displayed = document.querySelector('section.naturaleza-content .display');
    let list = document.querySelector('section.naturaleza-content .list');
    let action = false;
    let accomodation = document.querySelector('.travel .left .select .accommodation');
    let bundle = document.querySelector('.travel .left .select .bundle');
    Array.from(natureItems).forEach(element => {
        element.addEventListener('click', actionNaturalItem);
    });
    accomodation.addEventListener('click', travelAcction);
    bundle.addEventListener('click', travelAcction);
    async function actionNaturalItem(event) {
        let nodeEvent = event.target;
        if (nodeEvent.parentNode.classList.contains('list') && !action) {
            action = true;
            let nodeDisplay = displayed.firstElementChild;
            nodeDisplay.firstElementChild.classList.remove('displayed');
            nodeDisplay.firstElementChild.classList.add('noDisplayed');
            nodeDisplay.classList.add('invisible-c');
            await sleep(250);
            nodeDisplay.classList.remove('invisible-c');
            if (nodeEvent.nextElementSibling === undefined) {
                nodeEvent.parentNode.appenChild(nodeDisplay);
            }else {
                list.insertBefore(nodeDisplay, nodeEvent.nextElementSibling);
            }
            displayed.appendChild(nodeEvent);
            nodeEvent.classList.add('invisible-c');
            nodeEvent.firstElementChild.classList.remove('noDisplayed');
            await sleep(250);
            nodeEvent.classList.remove('invisible-c');
            nodeEvent.firstElementChild.classList.add('displayed');
            action = false;
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function travelAcction (evnet){
        let parent = event.target.parentNode;
        if (parent.classList.contains('accommodation')) {
            bundle.querySelector('.fill').classList.remove('arrow');
            accomodation.querySelector('.fill').classList.add('arrow');
        }else if (parent.classList.contains('bundle')) {
            bundle.querySelector('.fill').classList.add('arrow');
            accomodation.querySelector('.fill').classList.remove('arrow');
        }
    }

})();