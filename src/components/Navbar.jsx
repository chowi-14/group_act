import { NavLink } from "react-router-dom"

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? "bg-blue-700 text-white"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-200">
      <span className="flex items-center gap-2.5 font-bold text-lg text-gray-800">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-700 text-white font-bold text-sm">
          R
        </span>
        React Activity Portal
      </span>

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