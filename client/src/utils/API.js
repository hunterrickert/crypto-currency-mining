import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getbtcHashrate: function() {
    return axios
      .get("/info")
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
  }
};
