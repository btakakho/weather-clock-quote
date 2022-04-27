import ReactDOM from 'react-dom/client'
import App from './App'
import { DayTimeContext } from './context'
import { getDayTime } from './helpers'
import './index.css'

const dayTime = getDayTime(new Date().getHours())

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DayTimeContext.Provider value={dayTime}>
    <App />
  </DayTimeContext.Provider>
)
