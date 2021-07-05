// import queryString from 'query-string';
import axios from "axios";

export const GET_PROVINSI = () => {
  return axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi");
};

export const GET_KOTA = params => {
  return axios.get(
    `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${params}`
  );
};

export const GET_KECAMATAN = params => {
  return axios.get(
    `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${params}`
  );
};

export const GET_KATEGORI = () => {
  return axios.get(`/api/kategori`);
};

export const GET_LAPORAN = () => {
  return axios.get(`/api/lapor`);
};
export const GET_LAPORAN_NIK = id => {
  return axios.get(`/api/lapor/nik/${id}`);
};
export const GET_LAPORAN_ID = id => {
  return axios.get(`/api/lapor/id/${id}`);
};

export const GET_LAPORAN_JAKARTA = () => {
  return axios.get(`/api/get/laporan/jakarta`);
};
export const GET_LAPORAN_BALI = () => {
  return axios.get(`/api/get/laporan/bali`);
};
export const GET_LAPORAN_ACEH = () => {
  return axios.get(`/api/get/laporan/aceh`);
};
export const GET_LAPORAN_YOGYAKARTA = () => {
  return axios.get(`/api/get/laporan/yogyakarta`);
};
export const GET_LAPORAN_PAPUA = () => {
  return axios.get(`/api/get/laporan/papua`);
};
export const GET_LAPORAN_SULAWESI = () => {
  return axios.get(`/api/get/laporan/sulawesi`);
};

export const ADD_LAPORAN = body => {
  return axios.post("/api/lapor", body);
};
export const ADD_KATEGORI = body => {
  return axios.post("/api/kategori", body);
};

export const DONE_LAPORAN = id => {
  return axios.put(`/api/lapor/${id}/selesai`);
};

export const DELETE_LAPORAN = id => {
  return axios.delete(`/api/lapor/${id}`);
};

export const DELETE_KATEGORI = id => {
  return axios.delete(`/api/kategori/${id}`);
};

export const ADD_TANGGAPAN = body => {
  return axios.post("/api/lapor/tanggapan", body);
};

export const GET_TANGGAPAN_ID = id => {
  return axios.get(`/api/lapor/${id}/tanggapan`);
};
