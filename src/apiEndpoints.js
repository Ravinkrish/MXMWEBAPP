const BASE_URL = "https://fdpp.factspanapps.com:5006";


export function getApiUrl(endpoint) {
  return `${BASE_URL}${endpoint}`;
}
