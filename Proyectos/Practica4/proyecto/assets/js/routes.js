(function () {
    let position = 0;
    Array.from(document.querySelectorAll('section.control .control div')).forEach(item => item.addEventListener('click', action));
    let elements = document.querySelectorAll('section.select .right .item');
    let titles = document.querySelectorAll('section.select .right .title');
    let img = document.querySelector('section.select .left .img');
    let maxLength = elements.length - 1;
    function action(event) {
        elements[position].classList.add('hidden');
        titles[position].classList.add('hidden');
        img.classList.remove(`img${position}`);
        if (event.target.classList.contains('previous')) {
            position = (position === 0) ? maxLength : position - 1;
        }else if (event.target.classList.contains('next')) {
            position = (position === maxLength) ? 0 : position + 1;
        }
        elements[position].classList.remove('hidden');
        titles[position].classList.remove('hidden');
        img.classList.add(`img${position}`);
    }
})();

(function() {
    
})();