"use client"

import { createContext, useContext, useState } from 'react'

const StateContext = createContext<any>({})

function ContextProvider({ children }: any) {
  const [activeMenu, setActiveMenu] = useState<boolean>(true)
  const [screenSize, setScreenSize] = useState(undefined)
  const [darkMode, setDarkMode] = useState(false)
  const [activeScreen, setActiveScreen] = useState("1")
  const [selectPlatform, setSelectPlatform] = useState("")
  const [streams, setStreams] = useState([])
  const [twitchFavorites, setTwitchFavorites] = useState([])
  const [youtubeFavorites, setYoutubeFavorites] = useState([])

  return (
    <StateContext.Provider
      value={{
        activeMenu, setActiveMenu,
        screenSize, setScreenSize,
        darkMode, setDarkMode,
        activeScreen, setActiveScreen,
        selectPlatform, setSelectPlatform,
        streams, setStreams,
        twitchFavorites, setTwitchFavorites,
        youtubeFavorites, setYoutubeFavorites
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)

export default ContextProvider
