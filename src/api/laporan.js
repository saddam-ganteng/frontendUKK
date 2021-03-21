// import queryString from 'query-string';
import axios from "axios";

export const GET_PROVINSI = () => {
  return axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi");
};
