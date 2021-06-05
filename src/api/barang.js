// import queryString from 'query-string';
import axios from "axios";

export const GET_BARANG = () => {
  return axios.get(`/api/get/barang`);
};
