import { useState } from "react"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [getMessage, setMessage] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    if (!username || !password ) {
      setMessage("Please enter your username and password")
      return
    }

    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true)
      setMessage("Login Successful!")
    } else {
      setMessage("Invalid username or password")
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false),
    setUsername("")
    setPassword("")
    setMessage("")
  }
  return (
    <div>
      <h2>Login Authentication</h2>

      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button type="submit">Login</button>
          {getMessage && <p>{getMessage}</p>}
        </form>
      ) : (
        <div>
          <p>Welcome, {username}!</p>
          <p>{getMessage}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

    </div>
  )
}
