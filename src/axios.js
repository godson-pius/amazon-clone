import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-9e36d/us-central1/api' //THE API (cloud function ) URLL
})

export default instance;