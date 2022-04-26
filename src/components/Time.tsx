import { useEffect, useState } from 'react'

interface ITimeProps {
  city: string
}

export const Time = ({ city }: ITimeProps) => {
  const [date, setDate] = useState(new Date())

  const refreshClock = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])

  return (
    <div className='time'>
      <div className='city'>
        {city}
      </div>
      <div className='counter'>
        {date.toLocaleTimeString()} - {date.toDateString()}
      </div>
    </div>
  )
}
