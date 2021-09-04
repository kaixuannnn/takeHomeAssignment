import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

const getFullUrl = endpoint => {
  const fullUrl = BASE_URL + endpoint;
  return fullUrl;
};

axios.interceptors.response.use(
  response => {
    if (response.status != 200) return Promise.reject(response.data);
    return response.data;
  },
  error => {
    if (error.response.data) return Promise.reject(error.response.data);
    return Promise.reject(error.response);
  },
);

const fetchUrl = (method, endpoint, params = {}, headers = {}) => {
  if (method === 'get') {
    return axios({
      method,
      params,
      url: getFullUrl(endpoint),
    });
  }
  return axios({
    method,
    data: params,
    url: getFullUrl(endpoint),
    headers,
  });
};

const api = {
  get(endpoint, params) {
    return fetchUrl('get', endpoint, params);
  },
  post(endpoint, params, headers) {
    return fetchUrl('post', endpoint, params, headers);
  },
  put(endpoint, params, headers) {
    return fetchUrl('put', endpoint, params, headers);
  },
  patch(endpoint, params) {
    return fetchUrl('patch', endpoint, params);
  },
  delete(endpoint, params) {
    return fetchUrl('delete', endpoint, params);
  },
};

export default api;
