import { useState } from 'react'

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  function setValue(value) {
    const valueToStore =
      value instanceof Function ? value(storedValue) : value

    setStoredValue(valueToStore)

    try {
      localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch {
      // The app still works even if browser storage is unavailable.
    }
  }

  return [storedValue, setValue]
}