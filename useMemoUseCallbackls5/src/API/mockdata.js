

import axios from "axios";

const API = `https://6813c10c225ff1af1627189e.mockapi.io/api/users`;

const service = {
    get: () => axios.get(API).then(({ data }) => data),
    delete: (id) =>
      axios.delete(API + `/${id}`).then(({ data }) => data),
    put: (id, obj) =>
      axios.put(API + `/${id}`, obj).then(({ data }) => data),
    post: (obj) =>
      axios.post(API, obj).then(({ data }) => data),
  };
  
  export default service;