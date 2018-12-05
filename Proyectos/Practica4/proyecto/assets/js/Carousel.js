class Carousel {

    constructor(carouselId) {
        this._carousel = document.getElementById(carouselId);
        this._timeInterval = this._carousel.getAttribute('interval');
        this._direction = this._carousel.getAttribute('leftDirection') !== null ? 'left' : 'rigth';
        this._items = this._carousel.querySelectorAll('.frame');
        this._position = 0;
        this._maxLength = this._items.length - 1;
        Array.from(this._items).forEach(item => this.__returnOrigin(item));
    }

    startWithInterval() {
        this.next();
        if (this._maxLength > 1) {
            let interval = (this._timeInterval !== undefined) ? parseInt(this._timeInterval) * 1000 : 8000;
            window.setInterval(() => {
                this.next();
            }, interval);
        }

    }

    next() {
        if (this._maxLength > 1) {
            let previous = this._position;
            this._position = this._position === this._maxLength ? 0 : this._position + 1;
            this.__dissapear(this._items[previous]);
            this.__appear(this._items[this._position]);
            this.__returnOrigin(this._items[(this._position - 2) < 0 ? (this._position - 2 == -2 ? this._maxLength - 1 : this._maxLength)  : this._position - 2]);
        }
    }

    __dissapear(element) {
        element.classList.remove((this._direction === 'left') ? 'visible-left' :'visible-right');
        element.classList.add((this._direction === 'left') ? 'exit-left' : 'exit-right');
    }

    __appear(element) {
        element.classList.remove((this._direction === 'left') ? 'init-move-left' : 'init-move-right');
        element.classList.add((this._direction === 'left') ? 'visible-left' : 'visible-right');
    }

    __returnOrigin(element) {
        element.classList.remove((this._direction === 'left') ? 'exit-left' : 'exit-right');
        element.classList.add((this._direction === 'left') ? 'init-move-left' : 'init-move-right');
        
    }

    __sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    
}