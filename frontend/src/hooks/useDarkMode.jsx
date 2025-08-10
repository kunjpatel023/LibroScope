import { useEffect, useState } from 'react'
export default function useDarkMode() {
  const [dark, setDark] = useState(() => localStorage.getItem('dark') === 'true')
  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('dark', dark)
  }, [dark])
  return [dark, setDark]
}
