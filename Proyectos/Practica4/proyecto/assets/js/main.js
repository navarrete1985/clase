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

(function () {
    let position = 0;
    let images = document.querySelector('section.comments .people');
    let interval = null;
    let comments = document.querySelector('section.comments .wrapper-subtitle');
    let author = document.querySelector('section.comments .author');
    let length = document.querySelectorAll('section.comments .author .author').length;
    addInterval();

    Array.from(images.querySelectorAll('.img')).forEach(item => item.addEventListener('click', event => {
        let lastSelectedPosition = position;
        position = Number.parseInt(event.target.getAttribute('position'));
        window.clearInterval(interval);
        hiddenElement(lastSelectedPosition);
        visible(position);
        addInterval();
    }));

    function addInterval() {
        interval = window.setInterval(() => {
            let previous = position;
            if (position == length - 1) {
                position = 0;
            }else {
                position++;
            }
            hiddenElement(previous);
            visible(position)
        }, 10000);
    }

    function hiddenElement(position) {
        changeClass(images.querySelector(`div[position="${position}"]`), ['big-img'], null);
        changeClass(comments.querySelector(`div[position="${position}"]`), null, ['hidden']);
        changeClass(author.querySelector(`div[position="${position}"]`), null, ['hidden']);
    }

    function visible(position) {
        changeClass(images.querySelector(`div[position="${position}"]`), null, ['big-img']);
        changeClass(comments.querySelector(`div[position="${position}"]`), ['hidden'], null);
        changeClass(author.querySelector(`div[position="${position}"]`), ['hidden'], null);
    }

    function changeClass(items, removeClass, addClass) {
        if (removeClass !== null) {
            items.classList.remove(removeClass);
        }
        if (addClass !== null) {
            items.classList.add(addClass);
        }
    }
})();

(function() {
    let position = 0;
    let elements = document.querySelector('section.gastronomia .description');
    let max = elements.querySelectorAll('.wrapper').length - 1;
    let img = document.querySelector('section.gastronomia .wrapper-r .img');
    Array.from(document.querySelectorAll('section.control .control .btn')).forEach(item => {
        item.addEventListener('click', action);
    })

    function action(event) {
        elements.querySelector(`div[position="${position}"]`).classList.add('hidden', 'invisible');
        img.classList.remove(`img${position}`);
        if (event.target.classList.contains('next')) {
            position = (position === max) ? 0 : position + 1;
        }else if (event.target.classList.contains('previous')) {
            position = (position === 0) ? max : position - 1;
        }
        elements.querySelector(`div[position="${position}"]`).classList.remove('hidden', 'invisible');
        img.classList.add(`img${position}`);
    }
})();

(function() {
    let position = 0;
    let img = document.querySelector('section.ciudades .skyline');
    let frames = document.querySelector('section.ciudades .carousel-city .content');
    let maxlength = document.querySelectorAll('section.ciudades .carousel-city .content .frame').length - 1;
    let pointer = document.querySelector('section.ciudades .pointer');
    Array.from(document.querySelectorAll('section.ciudades .carousel-city a')).forEach(item => {
        item.addEventListener('click', action);
    });

    function action(event) {
        event.preventDefault();
        img.classList.remove(`skyline${position}`);
        frames.querySelector(`.frame[position="${position}"]`).classList.add('hidden');
        let circle = pointer.querySelector(`.circle${position}`);
        circle.classList.remove('black-circle');
        circle.classList.add('white-circle');
        if (event.target.classList.contains('left')) {
            position = (position === 0) ? maxlength : position - 1;
        }else if (event.target.classList.contains('right')) {
            position = (position === maxlength) ? 0 : position + 1;
        }
        img.classList.add(`skyline${position}`);
        frames.querySelector(`.frame[position="${position}"]`).classList.remove('hidden');
        circle = pointer.querySelector(`.circle${position}`);
        circle.classList.add('black-circle');
        circle.classList.remove('white-circle');
    }
})();