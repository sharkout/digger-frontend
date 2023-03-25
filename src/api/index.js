import axios from "axios";

// https://digger-backend-d9n2oe7fr-shahrukhnadeem04-gmailcom.vercel.app/
// http://localhost:8001

const instance = axios.create({
  baseURL:
    "https://digger-backend-d9n2oe7fr-shahrukhnadeem04-gmailcom.vercel.app",
});

export default instance;
