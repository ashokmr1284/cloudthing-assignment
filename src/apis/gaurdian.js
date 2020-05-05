import axios from "axios";

export default axios.create({
  baseURL: "http://content.guardianapis.com",
});
