import { useContext, useEffect, useState } from 'react'
import { getGeoByIP, IGeoIP } from './api/geo'
import { getRandomQoute, IQuote } from './api/quotes'
import { getWeather, IWeatherData, IWeatherField } from './api/weather'
import { Background, WeatherEnum } from './components/Background'
import { Preloader } from './components/Preloader'
import { Quote } from './components/Quote'
import { Time } from './components/Time'
import { WeatherWidget } from './components/WeatherWidget'
import { DayTimeContext } from './context'

function App() {
  const dayTime = useContext(DayTimeContext)
  const [isLoading, setLoading] = useState<boolean>(true)
  const [currentWeather, setWeather] = useState<any>()
  const [quote, setQuote] = useState<IQuote>()
  const [geoData, setGeoData] = useState<IGeoIP>()
  const [weatherData, setWeatherData] = useState<IWeatherData>()

  const refreshQoute = async () => {
    const { data: randomQuote } = await getRandomQoute()
    setQuote(randomQuote)
  }

  useEffect(() => {
    (async () => {
      const { data: geoData } = await getGeoByIP()
      const { data: weatherData } = await getWeather(
        geoData.latitude,
        geoData.longitude
      )
      const { data: randomQuote } = await getRandomQoute()

      setGeoData(geoData)
      setWeatherData(weatherData)
      setQuote(randomQuote)
      setLoading(false)
      setWeather(determineWeather(weatherData.weather[0]))
    })()
  }, [])

  function determineWeather({ id }: IWeatherField) {
    if (id >= 200 && id <= 232) {
      return WeatherEnum.Thunderstorm
    } else if (id >= 300 && id <= 321) {
      return WeatherEnum.Drizzle
    } else if (id >= 500 && id <= 531) {
      return WeatherEnum.Rain
    } else if (id >= 600 && id <= 622) {
      return WeatherEnum.Snow
    } else if (id === 701) {
      return WeatherEnum.Mist
    } else if (id === 711) {
      return WeatherEnum.Smoke
    } else if (id === 721) {
      return WeatherEnum.Haze
    } else if (id === 731 || id === 761) {
      return WeatherEnum.Dust
    } else if (id === 741) {
      return WeatherEnum.Fog
    } else if (id === 751) {
      return WeatherEnum.Sand
    } else if (id === 762) {
      return WeatherEnum.Ash
    } else if (id === 771) {
      return WeatherEnum.Squall
    } else if (id === 781) {
      return WeatherEnum.Tornado
    } else if (id === 800) {
      return WeatherEnum.Clear
    } else if (id >= 801 && id <= 804) {
      return WeatherEnum.Clouds
    } else {
      return WeatherEnum.Alien
    }
  }

  return (
    <>
      <Preloader active={isLoading} />
      {!isLoading && <Background daytime={dayTime} weather={currentWeather} />}
      {!isLoading &&
        <div className="app">
          {quote ? (
            <div className="app-quote">
              <Quote
                author={quote.author}
                content={quote.content}
                handleClick={refreshQoute}
              />
            </div>
          ) : null}

          <div className="app-time">
            <div className="temperature-wrapper">
              <div
                className='temperature'
              >
                {Math.round(weatherData?.main.temp || 0)}&deg;
              </div>
            </div>
            {geoData && <Time city={geoData.city} />}
            {weatherData && (
              <WeatherWidget
                weatherId={currentWeather}
                description={weatherData?.weather[0].main}
              />
            )}
          </div>
        </div>
      }
    </>
  )
}

export default App
