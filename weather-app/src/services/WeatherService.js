import axios from 'axios'

const apiKey = "52e99ad7d66cf2c8a365bfa5526b428b"
const apiUrl = "http://api.openweathermap.org/data/2.5"

export default class WeatherService {
    static getByCityName(city) {
        return axios.get(`${apiUrl}/weather?q=${city}&appid=${apiKey}`)
    }
}