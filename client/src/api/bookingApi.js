import API from "./axios";

export const createQuoteRequest = (quoteData) => {
  return API.post("/quotes", quoteData);
};