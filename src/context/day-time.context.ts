import { createContext } from 'react'
import { DayTimeEnum } from '../components/Background'

const DayTimeContext = createContext(DayTimeEnum.Day)
DayTimeContext.displayName = 'DayTimeContext'

export { DayTimeContext }
