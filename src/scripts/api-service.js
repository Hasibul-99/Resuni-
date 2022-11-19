import axios from "axios";
const base_url = "https://demoapi.planet0088.com/";

export const getData = async () => {
    try {
      let data = await axios.get(`${base_url}`, {
        headers: {}
      });

      return data;
    } catch (error) {
      // checkRes(error?.response?.status);
      // error.response?.data?.messages &&
      // typeof error.response?.data?.messages === "object"
      // ? error.response.data.messages.map((err) => {
      //     alertPop(error_status, err);
      //     })
      // : errorHandle(error);
      // return false;
    }
};