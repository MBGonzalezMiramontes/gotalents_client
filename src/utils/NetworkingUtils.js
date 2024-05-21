import axios from "axios";

const GoTaletsServer = axios.create({
    baseURL:"http://93.127.210.195:3001",
});

export default GoTaletsServer;