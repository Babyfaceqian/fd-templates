import http from './http';
export default function makeRequestCreator(url, method) {
  if (method == 'post') {
    return async function (params) {
      return http.post(url, params);
    };
  } else {
    return async function (params) {
      return http.get(url, {
        params
      })
    }
  }
}