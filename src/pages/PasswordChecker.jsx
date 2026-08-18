import { useState } from "react"

export default function PasswordChecker() {
  const [password, setPassword] = useState("")
  const [remarks, setRemarks] = useState("")
  const [message, setMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleChecker = (e) => {
    e.preventDefault()

    if (!password) {
      setRemarks("Please enter a password")
      setMessage("")
      return
    }

    if (password.length < 6) {
      setRemarks("Weak Password")
      setMessage("Create a strong password.")
    } else if (password.length <= 9) {
      setRemarks("Medium Password")
      setMessage("Consider creating a longer password.")
    } else {
      setRemarks("Strong Password")
      setMessage("You can use this password.")
    }
  }

  const handleClear = () => {
    setPassword("")
    setRemarks("")
    setMessage("")
    setShowPassword(false)
  }

  const getStrength = () => {
    if (!password) return 0
    if (password.length < 6) return 1
    if (password.length <= 9) return 2
    return 3
  }

  const strength = getStrength()

  const getStrengthStyle = () => {
    switch (remarks) {
      case "Weak Password":
        return {
          container:
            "bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20",
          text: "text-red-700 dark:text-red-400",
          bar: "bg-red-500",
        }

      case "Medium Password":
        return {
          container:
            "bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20",
          text: "text-amber-700 dark:text-amber-400",
          bar: "bg-amber-500",
        }

      case "Strong Password":
        return {
          container:
            "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20",
          text: "text-emerald-700 dark:text-emerald-400",
          bar: "bg-emerald-500",
        }

      default:
        return {
          container:
            "bg-slate-50 dark:bg-gray-800/60 border-slate-200 dark:border-gray-700",
          text: "text-slate-600 dark:text-slate-400",
          bar: "bg-slate-300 dark:bg-gray-600",
        }
    }
  }

  const strengthStyle = getStrengthStyle()

  return (
    <div className="min-h-full flex items-center justify-center px-4 py-10 bg-linear-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950/30 transition-colors duration-300">
      <div className="w-full max-w-lg">

        {/* Activity Tag */}
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Activity 3
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 overflow-hidden transition-colors duration-300">

          {/* Header */}
          <div className="relative px-8 pt-8 pb-7 bg-linear-to-br from-indigo-600 to-indigo-700 dark:from-indigo-600 dark:to-indigo-800 text-white overflow-hidden">
            <div className="relative flex items-center gap-4">

              {/* Security Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3 4.5 6v5.25c0 4.73 3.15 8.92 7.5 10.5 4.35-1.58 7.5-5.77 7.5-10.5V6L12 3Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.5 12 1.75 1.75L14.75 10"
                  />
                </svg>
              </div>

              <div>
                <p className="text-indigo-100 text-xs font-semibold uppercase tracking-wider mb-1">
                  Account Security
                </p>

                <h1 className="text-2xl font-bold">
                  Password Strength Checker
                </h1>

                <p className="text-indigo-100 text-sm mt-1">
                  Check how strong your password is.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">

            {/* Password Input */}
            <div className="mb-6">

              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Password
                </label>

                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {password.length} characters
                </span>
              </div>

              <div className="relative">
                {/* Lock Icon */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
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

                {/* Show Password */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
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
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.5 12c2.25 4.5 6 6.75 10.5 6.75 1.578 0 3.034-.292 4.35-.826M6.228 6.228A10.45 10.45 0 0 1 12 5.25c4.5 0 8.577 2.26 9.964 6.428.07.21.07.434 0 .644C20.577 16.49 16.64 18.75 12 18.75c-4.64 0-8.577-2.26-9.964-6.428Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3l18 18"
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

              {/* Strength Meter */}
              <div className="mt-4">
                <div className="flex gap-1.5 h-1.5">
                  {[1, 2, 3].map((level) => (
                    <div
                      key={level}
                      className={`flex-1 rounded-full transition-colors duration-300 ${
                        strength >= level
                          ? strengthStyle.bar
                          : "bg-slate-100 dark:bg-gray-800"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex justify-between mt-2">
                  <span className="text-[11px] text-slate-400 dark:text-slate-500">
                    Minimum 6 characters
                  </span>

                  <span
                    className={`text-[11px] font-semibold ${
                      password
                        ? strengthStyle.text
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    {!password
                      ? "Not checked"
                      : strength === 1
                      ? "Weak"
                      : strength === 2
                      ? "Medium"
                      : "Strong"}
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                type="submit"
                onClick={handleChecker}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-xl font-semibold shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 active:scale-[0.99] transition-all"
              >
                Check Password
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="px-5 py-3 bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-gray-700 rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-gray-700 transition-all"
              >
                Clear
              </button>
            </div>

            {/* Result */}
            {remarks && (
              <div className="mt-7 pt-7 border-t border-slate-100 dark:border-gray-800">
                {remarks === "Please enter a password" ? (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20">

                    <div className="w-9 h-9 rounded-full bg-red-100 dark:bg-red-500/10 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 text-red-600 dark:text-red-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>

                    <p className="text-sm font-medium text-red-700 dark:text-red-400">
                      {remarks}
                    </p>

                  </div>
                ) : (
                  <div
                    className={`rounded-xl border p-5 ${strengthStyle.container}`}
                  >

                    <div className="flex items-center justify-between">

                      <div>
                        <p
                          className={`text-xs font-medium mb-1 ${strengthStyle.text} opacity-70`}
                        >
                          Password Status
                        </p>

                        <p
                          className={`text-xl font-bold ${strengthStyle.text}`}
                        >
                          {remarks}
                        </p>

                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                          {message}
                        </p>
                      </div>

                      <div
                        className={`w-11 h-11 rounded-full bg-white/70 dark:bg-black/10 flex items-center justify-center ${strengthStyle.text}`}
                      >
                        {remarks === "Weak Password" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Password Guidelines */}
          <div className="px-8 pb-8">
            <div className="rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-100 dark:border-gray-700 p-4">
              <div className="flex items-center gap-2 mb-3">
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
                    d="M12 18v-6m0-4.5h.007M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Password Guidelines
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <p className="text-xs font-bold text-red-600 dark:text-red-400">
                    &lt; 6
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                    Weak
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs font-bold text-amber-600 dark:text-amber-400">
                    6–9
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                    Medium
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    10+
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                    Strong
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}