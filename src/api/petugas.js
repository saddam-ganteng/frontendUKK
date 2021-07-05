// import queryString from 'query-string';
import axios from "axios";

export const GET_PETUGAS = params => {
  return axios.get(`/api/get/petutas?${params}`);
};

export const PUT_PETUGAS = body => {
  return axios.put(`/api/petugas/${body.token}`, body);
};

export const POST_IMAGE = body => {
  return axios.post(`/api/petugas/foto/${body.token}`, body.image);
};
