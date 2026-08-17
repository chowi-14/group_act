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
    <div className="h-full flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-10">
        <p className="text-sm text-slate-500 dark:text-slate-400">Activity 1</p>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-5">Login Authentication</h2>

        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="mt-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Login
            </button>
            {getMessage && <p className="text-sm text-red-600 dark:text-red-400">{getMessage}</p>}
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
              Sample Credentials - Username: admin, Password: 1234
            </p>
          </form>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="text-slate-700 dark:text-slate-200">Welcome, {username}!</p>
            <p className="text-sm text-green-600 dark:text-green-400">{getMessage}</p>
            <button
              onClick={handleLogout}
              className="mt-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
