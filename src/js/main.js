import debounce from 'lodash.debounce';

import API from './fetchCountries.js';
import { onOutputInfo, onNoCountry, onError } from './notify.js';

import countriesListTemplate from '../partials/countries-list.hbs';
import countriesCardTemplate from '../partials/countries-card.hbs';

import refs from './refs.js';
const { inputEL, countriesEL, clearBtnEL } = refs;

inputEL.addEventListener('input', debounce(onSearch, 1500));
clearBtnEL.addEventListener('click', clearContent);

function onSearch() {
  if (!inputEL.value) {
    clearContent();
    return;
  }
  API(inputEL.value)
    .then(data => data.json())
    .then(countries => onCountrySearch(countries))
    .catch(error => onError(error));
}

function onCountrySearch(countries) {
  if (countries.length === 1) {
    clearContent();
    return onAppendCountriesCard(countries);
  } else if (countries.length >= 2 && countries.length <= 10) {
    clearContent();
    return onAppendListCountries(countries);
  } else if (countries.length > 10) {
    return onOutputInfo();
  } else if (countries.status === 404) {
    return onNoCountry();
  } else {
    return onError();
  }
}

function clearContent() {
  inputEL.value = '';
  countriesEL.innerHTML = '';
}

function onAppendListCountries(countries) {
  countriesEL.insertAdjacentHTML('beforeend', countriesListTemplate(countries));

  document.querySelector('.countries-list').addEventListener('click', onTargetValue);
}

function onAppendCountriesCard(countries) {
  countriesEL.insertAdjacentHTML('beforeend', countriesCardTemplate(countries));
}

function onTargetValue(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  API(e.target.textContent)
    .then(data => data.json())
    .then(onCountrySearch)
    .catch(error => onError(error));
}
