import { DayTimeEnum } from '../components/Background'

const DayTimeOptionsDefault = {
  dayStartsAt: 6,
  nightStartsAt: 20,
}

const getDayTime = (
  hours: number,
  { dayStartsAt, nightStartsAt } = DayTimeOptionsDefault
) => {
  if (hours > dayStartsAt && hours < nightStartsAt) {
    return DayTimeEnum.Day
  }

  return DayTimeEnum.Night
}

export { getDayTime }
