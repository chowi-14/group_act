import { useState } from "react"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [getMessage, setMessage] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()

    if (!username || !password) {
      setMessage("Please enter your username and password.")
      return
    }

    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true)
      setMessage("Login successful!")
    } else {
      setMessage("Invalid username or password.")
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername("")
    setPassword("")
    setMessage("")
    setShowPassword(false)
  }

  return (
    <div className="min-h-full flex items-center justify-center px-4 py-10 bg-linear-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950/30 transition-colors duration-300">
      <div className="w-full max-w-md">

        {/* Activity Tag */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Activity 1
          </span>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 overflow-hidden transition-colors duration-300">

          {/* Header */}
          <div className="px-8 pt-8 pb-6 text-center border-b border-slate-100 dark:border-gray-800">
            <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="w-7 h-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Login Authentication
            </h1>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Log in to access your account
            </p>
          </div>

          {!isLoggedIn ? (
            <form onSubmit={handleLogin} className="p-8">

              {/* Username */}
              <div className="mb-5">
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Username
                </label>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                      stroke="currentColor"
                      className="w-5 h-5 text-slate-400 dark:text-slate-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0"
                      />
                    </svg>
                  </div>

                  <input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Password
                  </label>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                      stroke="currentColor"
                      className="w-5 h-5 text-slate-400 dark:text-slate-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 0 0-9 0v3.75m-.75 0h10.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H6.75a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5Z"
                      />
                    </svg>
                  </div>

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.5 12c2.25 4.5 6 6.75 10.5 6.75 1.578 0 3.034-.292 4.35-.826M6.228 6.228A10.45 10.45 0 0 1 12 5.25c4.5 0 8.25 2.25 10.5 6.75a10.523 10.523 0 0 1-4.08 4.956M6.228 6.228 3 3m3.228 3.228 4.007 4.007m0 0a3 3 0 1 0 4.243 4.243M13.5 13.5 21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.644C3.423 7.51 7.36 5.25 12 5.25c4.64 0 8.577 2.26 9.964 6.428.07.21.07.434 0 .644C20.577 16.49 16.64 18.75 12 18.75c-4.64 0-8.577-2.26-9.964-6.428Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Message */}
              {getMessage && (
                <div
                  className={`mb-5 flex items-start gap-3 p-3.5 rounded-xl border ${
                    getMessage === "Login successful!"
                      ? "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                      : "bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 shrink-0 mt-0.5"
                  >
                    {getMessage === "Login successful!" ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    )}
                  </svg>

                  <p className="text-sm font-medium">
                    {getMessage}
                  </p>
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 active:scale-[0.99] transition-all"
              >
                Log In
              </button>

              {/* Demo Credentials */}
              <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-gray-800/70 border border-slate-100 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="w-4 h-4 text-indigo-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-6m0 0V6m0 6h6m-6 0H6"
                    />
                  </svg>

                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Demo Credentials
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 text-xs">
                  <div className="flex-1 px-3 py-2 rounded-lg bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700">
                    <span className="text-slate-400 dark:text-slate-500">
                      Username
                    </span>
                    <p className="font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
                      admin
                    </p>
                  </div>

                  <div className="flex-1 px-3 py-2 rounded-lg bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700">
                    <span className="text-slate-400 dark:text-slate-500">
                      Password
                    </span>
                    <p className="font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
                      1234
                    </p>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            /* Logged In State */
            <div className="p-8">

              <div className="text-center">

                {/* Success Icon */}
                <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8 text-emerald-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Welcome back!
                </h2>

                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  You are successfully logged in as
                </p>

                <div className="mt-4 inline-flex items-center px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20">
                  <span className="font-semibold text-indigo-700 dark:text-indigo-400">
                    {username}
                  </span>
                </div>

                <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                  {getMessage}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="mt-8 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 dark:bg-gray-800 hover:bg-slate-200 dark:hover:bg-gray-700 text-slate-700 dark:text-slate-200 font-semibold border border-slate-200 dark:border-gray-700 transition-all"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}