import { post } from "axios";

//Datos cuenta blizzard
const clientId = "2eef0c3063274077a75b8b7f1f512357";
const clientSecret = "I8LfHTBm2mTIQg8zBaq7jdSdWxM3WlM6";

//
const region = "eu";
const API_URL = `https://${region}.battle.net/oauth/token`;

//LLamada de tipo POST
function getToken() {
  const body = new FormData();

  body.append("grant_type", "client_credentials");

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
    auth: { username: clientId, password: clientSecret },
  };

  return post(API_URL, body, config);
}

export { getToken };
