import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
        <span className="navbar-brand">
            React Activity Portal
        </span>

        <Link to="/">Home</Link>
        <Link to="/login">Activity 1</Link>
        <Link to="/grade">Activity 2</Link>
        <Link to="/password">Activity 3</Link>
        <Link to="/bill">Activity 4</Link>
        <Link to="/attendance">Activity 5</Link>
    </nav>
  )
}
