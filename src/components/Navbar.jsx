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
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? "bg-blue-700 text-white"
        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
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
        <span className="flex items-center gap-2.5 font-bold text-lg text-gray-800 dark:text-white">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-700 text-white font-bold text-sm">
            R
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