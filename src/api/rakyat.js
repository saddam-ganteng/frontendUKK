// import queryString from 'query-string';
import axios from "axios";

export const GET_RAKYAT = params => {
  return axios.get(`/api/get/rakyat?${params}`);
};
