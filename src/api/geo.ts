import config from '../config/env'
import axios from 'axios'

export interface IGeoIP {
  city: string
  country_code2: string
  country_flag: string
  country_name: string
  ip: string
  latitude: number
  longitude: number
  time_zone: {
    current_time: string
  }
}

export const getGeoByIP = () => {
  return axios.get<IGeoIP>(`${config.IPGEOLOCATION_API}/ipgeo`, {
    params: { apiKey: config.IPGEOLOCATION_TOKEN },
  })
}
