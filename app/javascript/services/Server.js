import axios from "axios";

export const postRequest = (URL, data) =>
  new Promise((resolve, reject) => {
    axios
      .post(URL, data)
      .then(function (response) {
        return resolve({
          data: response.data,
          status: response.status,
          headers: response.headers,
        });
      })
      .catch(function (error) {
        return reject(error);
      });
  });

export const getRequest = (URL, params) =>
  new Promise((resolve, reject) => {
    axios
      .get(URL, params)
      .then(function (response) {
        return resolve({ data: response.data, status: response.status });
      })
      .catch(function (error) {
        return reject(error);
      });
  });

export const deleteRequest = (URL) =>
  new Promise((resolve, reject) => {
    axios
      .delete(URL)
      .then(function (response) {
        return resolve({ data: response.data, status: response.status });
      })
      .catch(function (error) {
        return reject(error);
      });
  });

export const patchRequest = (URL, data) =>
  new Promise((resolve, reject) => {
    axios
      .patch(URL, data)
      .then(function (response) {
        return resolve({
          data: response.data,
          status: response.status,
          headers: response.headers,
        });
      })
      .catch(function (error) {
        return reject(error);
      });
  });

export const putRequest = (URL, data, headers) =>
  new Promise((resolve, reject) => {
    axios
      .put(URL, data, { headers: headers })
      .then(function (response) {
        return resolve({
          data: response.data,
          status: response.status,
          headers: response.headers,
        });
      })
      .catch(function (error) {
        return reject(error);
      });
  });
