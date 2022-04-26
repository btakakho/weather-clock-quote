import day from '/day.jpg'
import night from '/night.jpg'
import cloud from '/cloudy.jpg'
import rain from '/rainy.jpg'
import rainNight from '/rainy-night.jpg'
import snow from '/snowy.jpg'
import snowNight from '/snowy-night.jpg'

export enum DayTimeEnum {
  Day,
  Night,
}

export enum WeatherEnum {
  Clear,
  Clouds,
  Rain,
  Snow,
  Thunderstorm,
  Drizzle,
  Mist,
  Smoke,
  Haze,
  Dust,
  Fog,
  Sand,
  Ash,
  Squall,
  Tornado,
  Alien,
}

export const themes = {
  [WeatherEnum.Clear]: {
    [DayTimeEnum.Day]: day,
    [DayTimeEnum.Night]: night,
  },
  [WeatherEnum.Clouds]: {
    [DayTimeEnum.Day]: cloud,
    [DayTimeEnum.Night]: cloud,
  },
  [WeatherEnum.Rain]: {
    [DayTimeEnum.Day]: rain,
    [DayTimeEnum.Night]: rainNight,
  },
  [WeatherEnum.Snow]: {
    [DayTimeEnum.Day]: snow,
    [DayTimeEnum.Night]: snowNight,
  },
  [WeatherEnum.Alien]: {
    [DayTimeEnum.Day]: snow,
    [DayTimeEnum.Night]: snowNight,
  },
  [WeatherEnum.Ash]: {
    [DayTimeEnum.Day]: snow,
    [DayTimeEnum.Night]: snowNight,
  },
  [WeatherEnum.Drizzle]: {
    [DayTimeEnum.Day]: snow,
    [DayTimeEnum.Night]: snowNight,
  },
  [WeatherEnum.Dust]: {
    [DayTimeEnum.Day]: snow,
    [DayTimeEnum.Night]: snowNight,
  },
  [WeatherEnum.Fog]: {
    [DayTimeEnum.Day]: snow,
    [DayTimeEnum.Night]: snowNight,
  },
  [WeatherEnum.Haze]: {
    [DayTimeEnum.Day]: snow,
    [DayTimeEnum.Night]: snowNight,
  },
  [WeatherEnum.Mist]: {
    [DayTimeEnum.Day]: snow,
    [DayTimeEnum.Night]: snowNight,
  },
  [WeatherEnum.Sand]: {
    [DayTimeEnum.Day]: snow,
    [DayTimeEnum.Night]: snowNight,
  },
  [WeatherEnum.Smoke]: {
    [DayTimeEnum.Day]: snow,
    [DayTimeEnum.Night]: snowNight,
  },
  [WeatherEnum.Squall]: {
    [DayTimeEnum.Day]: snow,
    [DayTimeEnum.Night]: snowNight,
  },
  [WeatherEnum.Thunderstorm]: {
    [DayTimeEnum.Day]: snow,
    [DayTimeEnum.Night]: snowNight,
  },
  [WeatherEnum.Tornado]: {
    [DayTimeEnum.Day]: snow,
    [DayTimeEnum.Night]: snowNight,
  },
} as Record<WeatherEnum, any>

export const Background = ({
  daytime,
  weather,
}: {
  daytime: DayTimeEnum
  weather: WeatherEnum
}) => {
  const bg = themes[weather][daytime]

  return (
    <div className="background" style={{ backgroundImage: `url(${bg})` }}></div>
  )
}
