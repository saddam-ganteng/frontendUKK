// import queryString from 'query-string';
import axios from "axios";

export const LOGIN = body => {
  return axios.post("/api/login/masyarakat", body);
};

export const LOGIN_ADMIN = body => {
  return axios.post("/api/login/petugas", body);
};

export const REGISTER_RAKYAT = body => {
  return axios.post("/api/register/masyarakat", body);
};
