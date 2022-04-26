import { IconContext } from 'react-icons'
import { WiAlien, WiDayCloudy, WiDayHaze, WiDaySunny, WiDust, WiFog, WiRain, WiRaindrops, WiRainWind, WiSandstorm, WiSmog, WiSmoke, WiSnow, WiThunderstorm } from 'react-icons/wi'
import { WeatherEnum } from "./Background"

interface IWeatherWidgetProps {
  description: string
  weatherId: WeatherEnum
}

interface WeatherIconProps {
  weatherId: WeatherEnum
}

const WeatherIcon = ({ weatherId }: WeatherIconProps) => {
  switch (weatherId) {
    case WeatherEnum.Ash:
      return <WiSmog />
    case WeatherEnum.Clear:
      return <WiDaySunny />
    case WeatherEnum.Clouds:
      return <WiDayCloudy />
    case WeatherEnum.Drizzle:
      return <WiRaindrops />
    case WeatherEnum.Dust:
      return <WiDust />
    case WeatherEnum.Fog:
      return <WiFog />
    case WeatherEnum.Haze:
      return <WiDayHaze />
    case WeatherEnum.Mist:
      return <WiDayHaze />
    case WeatherEnum.Rain:
      return <WiRain />
    case WeatherEnum.Sand:
      return <WiSandstorm />
    case WeatherEnum.Smoke:
      return <WiSmoke />
    case WeatherEnum.Snow:
      return <WiSnow />
    case WeatherEnum.Squall:
      return <WiRainWind />
    case WeatherEnum.Thunderstorm:
      return <WiThunderstorm />
    case WeatherEnum.Tornado:
      return <WiDayCloudy />
    default:
      return <WiAlien />
  }
}

export const WeatherWidget = ({ description, weatherId }: IWeatherWidgetProps) => {
  return (
    <div className='weather-widget'>
      <div className='icon'>
        <IconContext.Provider value={{ size: '56' }}>
          <WeatherIcon weatherId={weatherId} />
        </IconContext.Provider>
      </div>
      <div className='description'>
        {description}
      </div>
    </div>
  )
}
