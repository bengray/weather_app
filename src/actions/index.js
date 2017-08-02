import axios from 'axios';
import {
    ROOT_URL,
    FETCH_WEATHER
} from '../constants/index';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}