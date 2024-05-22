import axios from "axios";

const GoTaletsServer = axios.create({
    baseURL:"https://www.gotalentsglobal.com:3001",
});

export default GoTaletsServer;