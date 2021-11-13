import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID IJxSaq-0QWavqKYAhUlZz_od6CkTe2vylm0I-Y-k57Y",
  },
});
