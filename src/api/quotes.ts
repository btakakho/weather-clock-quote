import axios from 'axios'
import config from '../config/env'

export interface IQuote {
  author: string
  content: string
  handleClick: () => {}
}

export const getRandomQoute = () => {
  return axios.get<IQuote>(`${config.QUOTABLE_API}/random`)
}
