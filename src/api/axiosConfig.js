import axios from "axios";

export default axios.create({
    baseURL: "https://movies-api-db-64696acd8fb3.herokuapp.com/",
    headers: {
        "ngrok-skip-browser-warning": "true",
    }
});