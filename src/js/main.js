import debounce from 'lodash.debounce';

import fetch from './fetchCountries.js';
import { onOutputInfo, onNoCountry, onError } from './notify.js';

import countriesListTemplate from '../templates/countries-list.hbs'
// '../partials/countries-list.hbs';
import countriesCardTemplate from '../templates/countries-card.hbs';

import refs from './refs.js';
const { inputEL, countriesEL, clearBtnEL } = refs;

// import ButtonEl from './button.js'
// const buttonClose = new ButtonEl({
//   selector: '#button-clear-js',
// })

// const buttonClose = new ButtonEl({
  // selector: '#button-clear-js'
// });

inputEL.addEventListener('input', debounce(onSearch, 1500));
clearBtnEL.addEventListener('click', clearContent);
// buttonClose.addEventListener('click', () => buttonClose.onClickClear());
  // () => buttonClose.onClickClear());


// // function onClickAction() {
// //   clearContent()
// // }
// buttonClose.onClick();

function onSearch() {
  if (!inputEL.value) {
    clearContent();
    return;
  }
  fetch(inputEL.value)
    .then(response => response.json())
    .then(countries => onCountrySearch(countries))
    .catch(error => onError(error));
}

function onCountrySearch(array) {
  if (array.length === 1) {
    clearContent();
    return onAppendCountriesCard(array);
  } else if (array.length >= 2 && array.length <= 10) {
    clearContent();
    return onAppendListCountries(array);
  } else if (array.length > 10) {
    return onOutputInfo();
  } else if (array.status === 404) {
    return onNoCountry();
  } else {
    return onError();
  }
}

export function clearContent() {
  inputEL.value = '';
  countriesEL.innerHTML = '';
}

function onAppendListCountries(array) {
  countriesEL.insertAdjacentHTML('beforeend', countriesListTemplate(array));

  document.querySelector('.countries-list').addEventListener('click', onTargetValue);
}

function onAppendCountriesCard(array) {
  countriesEL.insertAdjacentHTML('beforeend', countriesCardTemplate(array));
}

function onTargetValue(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  fetch(e.target.textContent)
    .then(data => data.json())
    .then(onCountrySearch)
    .catch(error => onError(error));
}
