'use strict'
import { clearContent } from './main.js';

export default class ButtonEl {
    constructor(selector) {
        this.$el = document.querySelector(selector)
        console.log(this.$el);
    }

    onClickClear() { this.$el.addEventListener('click', clearContent()) }
}



// function onClickAction() {

// }