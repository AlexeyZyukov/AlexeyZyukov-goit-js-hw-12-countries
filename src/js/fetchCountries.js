// const BASE_URL = 'https://restcountries.com/v3.1/name/';
const BASE_URL = 'https://restcountries.com/v2/name/';

export default async function fetchCountries(searchQuery) {
  return await fetch(`${BASE_URL}${searchQuery}`);
}

// export default function fetchCountries(searchQuery) {
//   return fetch(`${BASE_URL}${searchQuery}`);
// }
