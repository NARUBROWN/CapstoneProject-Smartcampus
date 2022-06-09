import axios from "axios";

function showNoticeApi() {
    const BASE_URL = 'http://localhost:3000/board';
    return axios.get(BASE_URL);
}

export {showNoticeApi}