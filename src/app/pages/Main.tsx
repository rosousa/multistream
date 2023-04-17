import { useEffect, useRef, useState } from "react"
import { useStateContext } from "../context/ContextProvider"

function Main() {
  const refHeight = useRef<any>(null)
  const refWidth = useRef<any>(null)

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const {activeMenu, setActiveMenu} = useStateContext()
  const {activeScreen, setActiveScreen} = useStateContext()

  const getSize = () => {
    const newWidth = Math.floor(refWidth.current.clientWidth-(refWidth.current.clientWidth/100))
    setWidth(newWidth)
    const newHeight = Math.floor(refHeight.current.clientHeight-(refHeight.current.clientHeight/100))
    setHeight(newHeight)
  }

  const handleClick = (screen: any) => {
    setActiveScreen(() => (screen))
  }

  useEffect(() => {
    getSize()
  }, [activeMenu])

  useEffect(() => {
    const handleWindowResize = () => {
      getSize()
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <div id='top' className='flex flex-col w-full h-full pr-3'>
      <div ref={refHeight} key='row1' className='flex w-full h-1/2 m-1 flex-nowrap'>
        <div ref={refWidth} className='flex w-1/2 mr-1 bg-[#1b1b1b] 
        border border-[#1b1b1b] hover:border-blue-600
        justify-center items-center'
        onClick={() => handleClick('1')}
        >
          screen1, {width}, {height}, active {activeScreen}
        </div>
        <div ref={refWidth} className='flex w-1/2 mr-1 bg-[#1b1b1b] 
        border border-[#1b1b1b] hover:border-blue-600
        justify-center items-center'
        onClick={() => handleClick('2')}
        >
          screen2, {width}, {height}, active {activeScreen}
        </div>
      </div>
      <div ref={refHeight} key='row2' className='flex w-full h-1/2 mr-1 ml-1 flex-nowrap'>
        <div ref={refWidth} className='flex w-1/2 mr-1 bg-[#1b1b1b] 
        border border-[#1b1b1b] hover:border-blue-600
        justify-center items-center'
        onClick={() => handleClick('3')}
        >
          screen3, {width}, {height}, active {activeScreen}
        </div>
        <div ref={refWidth} className='flex w-1/2 mr-1 bg-[#1b1b1b] 
        border border-[#1b1b1b] hover:border-blue-600
        justify-center items-center'
        onClick={() => handleClick('4')}
        >
          screen4, {width}, {height}, active {activeScreen}
        </div>
      </div>
    </div>
  )
}

export default Main
