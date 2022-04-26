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
    [DayTimeEnum.Day]: '/day.jpg',
    [DayTimeEnum.Night]: '/night.jpg',
  },
  [WeatherEnum.Clouds]: {
    [DayTimeEnum.Day]: '/cloudy.jpg',
    [DayTimeEnum.Night]: '/cloudy.jpg',
  },
  [WeatherEnum.Rain]: {
    [DayTimeEnum.Day]: '/rainy.jpg',
    [DayTimeEnum.Night]: '/rainy-night.jpg',
  },
  [WeatherEnum.Snow]: {
    [DayTimeEnum.Day]: '/snowy.jpg',
    [DayTimeEnum.Night]: '/snowy-night.jpg',
  },
  [WeatherEnum.Alien]: {
    [DayTimeEnum.Day]: '/snowy.jpg',
    [DayTimeEnum.Night]: '/snowy-night.jpg',
  },
  [WeatherEnum.Ash]: {
    [DayTimeEnum.Day]: '/snowy.jpg',
    [DayTimeEnum.Night]: '/snowy-night.jpg',
  },
  [WeatherEnum.Drizzle]: {
    [DayTimeEnum.Day]: '/snowy.jpg',
    [DayTimeEnum.Night]: '/snowy-night.jpg',
  },
  [WeatherEnum.Dust]: {
    [DayTimeEnum.Day]: '/snowy.jpg',
    [DayTimeEnum.Night]: '/snowy-night.jpg',
  },
  [WeatherEnum.Fog]: {
    [DayTimeEnum.Day]: '/snowy.jpg',
    [DayTimeEnum.Night]: '/snowy-night.jpg',
  },
  [WeatherEnum.Haze]: {
    [DayTimeEnum.Day]: '/snowy.jpg',
    [DayTimeEnum.Night]: '/snowy-night.jpg',
  },
  [WeatherEnum.Mist]: {
    [DayTimeEnum.Day]: '/snowy.jpg',
    [DayTimeEnum.Night]: '/snowy-night.jpg',
  },
  [WeatherEnum.Sand]: {
    [DayTimeEnum.Day]: '/snowy.jpg',
    [DayTimeEnum.Night]: '/snowy-night.jpg',
  },
  [WeatherEnum.Smoke]: {
    [DayTimeEnum.Day]: '/snowy.jpg',
    [DayTimeEnum.Night]: '/snowy-night.jpg',
  },
  [WeatherEnum.Squall]: {
    [DayTimeEnum.Day]: '/snowy.jpg',
    [DayTimeEnum.Night]: '/snowy-night.jpg',
  },
  [WeatherEnum.Thunderstorm]: {
    [DayTimeEnum.Day]: '/snowy.jpg',
    [DayTimeEnum.Night]: '/snowy-night.jpg',
  },
  [WeatherEnum.Tornado]: {
    [DayTimeEnum.Day]: '/snowy.jpg',
    [DayTimeEnum.Night]: '/snowy-night.jpg',
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
