import { WiDaySunny, WiRain, WiSnow } from 'react-icons/wi'
import { IconContext } from 'react-icons'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

interface ILoaderProps {
  active: boolean
}

const Wrapper = styled.div<ILoaderProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  background-color: #151515;
  justify-content: center;
  align-items: center;
  opacity: ${({ active }) => active ? 1 : 0};
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  transition: visibility 1s, opacity 300ms;
`

export const Preloader = ({ active }: ILoaderProps) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (!active) return

    const timerId = setInterval(() => {
      if (counter >= 2) {
        setCounter(0)
      } else {
        setCounter(counter + 1)
      }
    }, 500)

    return function cleanup() {
      clearInterval(timerId)
    }
  }, [counter, active])

  const Ico = () => {
    switch (counter) {
      case 0:
        return <WiRain />
      case 1:
        return <WiDaySunny />
      case 2:
        return <WiSnow />
    }
  }

  return (
    <Wrapper active={active}>
      <IconContext.Provider value={{ size: '64' }}>
        {Ico()}
      </IconContext.Provider>
    </Wrapper>
  )
}
