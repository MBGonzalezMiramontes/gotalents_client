import axios from "axios";

const GoTaletsServer = axios.create({
    baseURL:"https://api.gotalentsglobal.com",
});

export default GoTaletsServer;