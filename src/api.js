import axios from "axios";

axios.defaults.baseURL = "https://654f52d5358230d8f0cd3548.mockapi.io";

export const fetchAllAdverts = async () => {
  try {
    const response = await axios.get("/advert");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAdvertsByPage = async (page) => {
  try {
    const response = await axios.get("/advert", {
      params: {
        page,
        limit: 12,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
