import { NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

export default function Navbar() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  )

  const navRef = useRef(null)

  useEffect(() => {
    const setNavHeight = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty(
          "--nav-height",
          `${navRef.current.offsetHeight}px`
        )
      }
    }
    setNavHeight()
    window.addEventListener("resize", setNavHeight)
    return () => window.removeEventListener("resize", setNavHeight)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  const linkClasses = ({ isActive }) =>
    `relative px-4 py-2 text-sm font-medium transition-colors after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-4 after:h-0.5 after:transition-colors ${
      isActive
        ? "text-blue-700 dark:text-blue-400 after:bg-blue-700 dark:after:bg-blue-400"
        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white after:bg-transparent"
    }`

  const toggleTheme = () => {
    document.documentElement.classList.add("no-transition")
    setIsDark((prev) => !prev)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove("no-transition")
      })
    })
  }

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-2.5 font-bold text-lg text-indigo-600 dark:text-white">
          <span className="flex items-center justify-center w-8 h-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path className="fill-indigo-600 dark:fill-white" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
            </svg>
          </span>
          React Activity Portal
        </span>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-colors ${
            isDark
              ? "text-gray-300 hover:text-sky-400 hover:bg-gray-800"
              : "text-gray-600 hover:text-yellow-400 hover:bg-gray-100"
          }`}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          )}
        </button>
      </div>

      <div className="flex items-center gap-1">
        <NavLink to="/" end className={linkClasses}>Home</NavLink>
        <NavLink to="/login" className={linkClasses}>Activity 1</NavLink>
        <NavLink to="/grade" className={linkClasses}>Activity 2</NavLink>
        <NavLink to="/password" className={linkClasses}>Activity 3</NavLink>
        <NavLink to="/bill" className={linkClasses}>Activity 4</NavLink>
        <NavLink to="/attendance" className={linkClasses}>Activity 5</NavLink>
      </div>
    </nav>
  )
}