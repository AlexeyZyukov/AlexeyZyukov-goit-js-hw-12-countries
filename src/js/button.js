'use strict'
import { clearContent } from './main.js';

export default class ButtonEl {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
// console.log(this.$el);
    onClickClear() { clearContent() }
}

// const buttonClose = new ButtonEl({
//     selector: '#button-clear-js',
// });
// const buttonClose = new ButtonEl()
// export default buttonClose;

// function onClickAction() {

// }