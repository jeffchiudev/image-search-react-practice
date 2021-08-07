import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID G8FWexWrlEnQo3Kjk1En-wLDlwpB0ohf64QgYA1EtQ4",
  },
});
