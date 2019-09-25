const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const CryptoApis = require("cryptoapis.io");
const apiKey = "f9865560a355a1622f47aad89bba07c2be67de3b";
const caClient = new CryptoApis(apiKey);
const PORT = process.env.PORT || 8000;

//require passport file
require("./services/passport");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
app.get("/info", function(req, res) {
  caClient.BC.ETH.blockchain.getInfo().then(ethdata =>
    caClient.BC.BTC.blockchain.getInfo().then(btcdata => {
      res.json({ eth: ethdata.payload, btc: btcdata.payload });
    })
  );
  // caClient.BC.ETH.switchNetwork(caClient.BC.ETH.NETWORKS.ROPSTEN);
});
// Connect to the Mongo DB

const db = require("./config/connection");
db(process.env.MONGODB_URI || "mongodb://localhost/crypto-mining");
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/crypto-mining");

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/client/build/index.html"));
});
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
