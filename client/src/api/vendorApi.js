import API from "./axios";

export const getVendors = () => {
  return API.get("/vendors");
};

export const getVendorById = (id) => {
  return API.get(`/vendors/${id}`);
};