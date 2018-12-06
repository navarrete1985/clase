class Carousel {

    constructor(carouselId) {
        this._carousel = document.getElementById(carouselId);
        this._timeInterval = this._carousel.getAttribute('interval');
        this._direction = this._carousel.getAttribute('leftDirection') !== null ? 'left' : 'rigth';
        this._items = this._carousel.querySelectorAll('.frame');
        this._position = 0;
        this._maxLength = this._items.length - 1;
        this.__prepare();
        this._isInterval = false;
    }

    startWithInterval() {
        this._isInterval = true;
        if (this._maxLength > 1) {
            let interval = (this._timeInterval !== undefined) ? parseInt(this._timeInterval) * 1000 : 8000;
            this._intervalId = window.setInterval(() => {
                this.next();
            }, interval);
        }

    }

    next() {
        if (this._maxLength > 1) {
            let previous = this._position;
            this._position = this._position === this._maxLength ? 0 : this._position + 1;
            if (this._direction === 'left') {
                this.__moveLeftToRight(this._items[previous], this._items[this._position]);
            }else {
                this.__moveRightToLeft(this._items[previous], this._items[this._position]);
            }
            this.__isInterval();
        }
    }

    previous() {
        if (this._maxLength > 1) {
            let previous = this._position;
            this._position = this._position === 0 ? this._maxLength : this._position - 1;
            if (this._direction === 'left') {
                this.__moveRightToLeft(this._items[previous], this._items[this._position]);
            }else {
                this.__moveLeftToRight(this._items[previous], this._items[this._position]);
            }
            
            this.__isInterval();
        }
    }

    async __moveLeftToRight(dissapearElement, appearElement) {
        appearElement.classList.remove('activate-transition', 'invisible', 'move-to-right');
        appearElement.classList.add('move-to-left');
        await this.__sleep(250);
        appearElement.classList.add('activate-transition');
        await this.__sleep(250)
        dissapearElement.classList.add('activate-transition', 'move-to-right');
        dissapearElement.classList.remove('visible');
        appearElement.classList.remove('move-to-left');
        appearElement.classList.add('visible');
    }

    async __moveRightToLeft(dissapearElement, appearElement) {
        appearElement.classList.remove('activate-transition', 'invisible', 'move-to-left');
        appearElement.classList.add('move-to-right');
        await this.__sleep(250);
        appearElement.classList.add('activate-transition');
        await this.__sleep(250)
        dissapearElement.classList.add('activate-transition', 'move-to-left');
        dissapearElement.classList.remove('visible');
        appearElement.classList.remove('move-to-right');
        appearElement.classList.add('visible');
    }

    __prepare() {
        Array.from(this._items).forEach(element => element.classList.add('invisible'));
        this._items[0].classList.remove('invisible');
        this._items[0].classList.add('visible', 'activate-transition');
    }

    __sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    __isInterval() {
        if (this._isInterval) {
            window.clearInterval(this._intervalId);
            this.startWithInterval();
        }
    }

}