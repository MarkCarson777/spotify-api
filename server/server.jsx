const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/refresh", (req, res) => {
  console.log("hi");
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:5173",
    clientId: "5b520526277442868e441edb991d633f",
    clientSecret: "1338bb1570734b8c887bfe55ad527f49",
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  const clientId = "5b520526277442868e441edb991d633f";
  const clientSecret = "1338bb1570734b8c887bfe55ad527f49";
  const redirectUri = "http://localhost:5173";
  const authHeader =
    "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const tokenEndpoint = "https://accounts.spotify.com/api/token";
  const tokenRequestBody = new URLSearchParams({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirectUri,
  }).toString();

  axios
    .post(tokenEndpoint, tokenRequestBody, {
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => {
      const { access_token, refresh_token, expires_in } = response.data;
      res.json({
        accessToken: access_token,
        refreshToken: refresh_token,
        expiresIn: expires_in,
      });
    })
    .catch((error) => {
      console.log("error", error);
      res.sendStatus(400);
    });
});

app.listen(5174);
