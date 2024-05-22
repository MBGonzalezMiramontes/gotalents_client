import axios from "axios";

const GoTaletsServer = axios.create({
    baseURL:"https://www.gotalentsglobal.com",
});

export default GoTaletsServer;