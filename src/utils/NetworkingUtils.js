import axios from "axios";

const GoTalentsServer = axios.create({
    baseURL:"http://localhost:3001",
});

export default GoTalentsServer;