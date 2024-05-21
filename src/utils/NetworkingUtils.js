import axios from "axios";

const GoTaletsServer = axios.create({
    baseURL:"https://93.127.210.195/nodeapp",
});

export default GoTaletsServer;