// import queryString from 'query-string';
import axios from "axios";

export const LOGIN = body => {
  return axios.post("/api/login", body);
};
