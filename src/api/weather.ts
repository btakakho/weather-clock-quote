import axios from 'axios'
import config from '../config/env'

export interface IWeatherField {
  id: number
  main: string
  description: string
}

export interface IWeatherData {
  main: {
    temp: number
  }
  weather: IWeatherField[]
}

export const getWeather = (latitude: number, longitude: number) => {
  return axios.get<IWeatherData>(`${config.OPENWEATHERMAP_API}/weather`, {
    params: {
      appid: config.OPENWEATHERMAP_TOKEN,
      units: 'metric',
      lat: latitude,
      lon: longitude,
    },
  })
}
