require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes");
const app = express();
const CryptoApis = require("cryptoapis.io");
const apiKey = process.env.cryptoapi_ID;
const caClient = new CryptoApis(apiKey);
const PORT = process.env.PORT || 8000;

//require passport file
require("./services/passport");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

app.use(express.static("client/build"));

// Add routes, both API and view
app.get("/cryptoInfo", function(req, res) {
  console.log("GETTING STUFF");
  caClient.BC.ETH.blockchain
    .getInfo()
    .then(ethdata => {
      setTimeout(() => {
        caClient.BC.BTC.blockchain
          .getInfo()
          .then(btcdata => {
            console.log(ethdata, btcdata);
            res.json({ eth: ethdata.payload, btc: btcdata.payload });
          })
          .catch(err => console.log(err));
      }, 1200);
    })
    .catch(err => console.log(err));
});
// Connect to the Mongo DB
app.use(routes);

const db = require("./config/connection");
db(process.env.MONGODB_URI || "mongodb://localhost/crypto-mining");
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/crypto-mining");

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
