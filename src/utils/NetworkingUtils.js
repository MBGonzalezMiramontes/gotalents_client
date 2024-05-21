import axios from "axios";

const GoTaletsServer = axios.create({
    baseURL:"https://gotalentsglobal.com/nodeapp",
});

export default GoTaletsServer;