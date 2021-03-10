import axios from 'axios';

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/`;

const APIServices = {
  sendRequest: (
    method,
    url,
    headerParams,
    body,
    { timeout = 60000 } = {},
    responseType = 'json'
  ) => {
    const headers = headerParams || { 'Content-Type': 'application/json' };
    const request = {
      url,
      method,
      timeout,
      headers,
      responseType,
    };
    request.params = body;
    return new Promise((resolve) => {
      axios
        .request(request)
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            resolve(res);
          } else {
            resolve({ isError: true, ...res.data });
          }
        })
        .catch((err) => resolve({ isError: true, err }));
    });
  },
};

export default APIServices;
