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
<<<<<<< HEAD
app.use(routes);
app.get("/info1", function(req, res) {
  caClient.BC.ETH.blockchain.getInfo().then(ethdata =>
    caClient.BC.BTC.blockchain.getInfo().then(btcdata => {
      res.json({ eth: ethdata.payload, btc: btcdata.payload });
    })
  );
=======
app.get("/info1", async function (req, res) {
  try {
    const ethdata = await caClient.BC.ETH.blockchain.getInfo()
    const btcdata = await caClient.BC.BTC.blockchain.getInfo()
    res.json({ eth: ethdata.payload, btc: btcdata.payload });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
>>>>>>> 8e58b83e0361f3ffca39208a94e27d4869da7607
  // caClient.BC.ETH.switchNetwork(caClient.BC.ETH.NETWORKS.ROPSTEN);
});
// Connect to the Mongo DB
app.use(routes);

const db = require("./config/connection");
<<<<<<< HEAD
db(
  process.env.MONGODB_URI ||
    "mongodb://rickert:useruser1@ds023714.mlab.com:23714/heroku_l4jpnn5j"
);
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/crypto-mining");

=======
db(process.env.MONGODB_URI || "mongodb://localhost/crypto-mining");
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/crypto-mining");

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
});
>>>>>>> 8e58b83e0361f3ffca39208a94e27d4869da7607
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
