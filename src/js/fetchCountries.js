const BASE_URL = 'https://restcountries.com/v2/name/';

export default async function fetchCountries(searchQuery) {
  return await fetch(`${BASE_URL}${searchQuery}`);
}
