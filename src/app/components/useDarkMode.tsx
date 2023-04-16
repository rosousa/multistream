import { useState, useEffect } from 'react'
import { useStateContext } from '../context/ContextProvider'

const useLocalStorage = (key: any, initialValue?: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue;
    } catch(error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value (storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}

function useDarkMode() {
  const [enabled, setEnabled] = useLocalStorage('dark-theme')
  const isEnabled = typeof enabledState === 'undefined' && enabled
  const {darkMode, setDarkMode} = useStateContext()

  const addClass = (bodyClass: any, className: any) => {
    bodyClass.add(className)
    setDarkMode(isEnabled)
  }

  const removeClass = (bodyClass: any, className: any) => {
    bodyClass.remove(className)
    setDarkMode(isEnabled)
  }

  useEffect(() => {
    const className = 'dark'
    const bodyClass = window.document.body.classList
    isEnabled ? addClass(bodyClass, className) : removeClass(bodyClass, className)
  }, [enabled, setEnabled])

  return [enabled, setEnabled]
}

export default useDarkMode
