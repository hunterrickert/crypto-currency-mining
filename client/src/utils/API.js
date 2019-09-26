import axios from "axios";

export default {
  getbtcHashrate: function() {
    return axios
      .get("/cryptoInfo")
      .then(data => {
        console.log(data.data);
        return data.data;
      })
      .catch(err => {
        throw err;
      });
  },
  getbtcPrice: function() {
    return axios
      .get("https://www.satochi.co/latest")
      .then(data => {
        console.log(data);
        return data.data;
      })
      .catch(err => {
        throw err;
      });
  },
  getethPrice: function() {
    return axios
      .get("https://api.coingecko.com/api/v3/coins/ethereum")
      .then(data => {
        return data.data;
      });
  }
};
