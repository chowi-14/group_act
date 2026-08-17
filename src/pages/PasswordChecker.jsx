import { useState } from "react"

export default function PasswordChecker() {
  const [password, setPassword] = useState("")
  const [remarks, setRemarks] = useState("")
  const [message, setMessage] = useState("")

  const handleChecker = (e) => {
    e.preventDefault()

    if(!password) {
      setRemarks("Please enter a password")
      return
    }

    if (password.length < 6) {
      setRemarks("Weak Password")
      setMessage("Create a strong password.")
    } else if (password.length >= 6 && password.length <= 9) {
      setRemarks("Medium Password")
      setMessage("Consider creating a longer password.")
    } else if (password.length >= 10) {
      setRemarks("Strong Password")
      setMessage("You can use this password.")
    } else {
      setMessage("Create a strong password")
    }

  }

  const handleClear = () => {
    setPassword("")
    setRemarks("")
  }

  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-10">
        <p className="text-sm text-slate-500 dark:text-slate-400">Activity 3</p>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-5">Password Strength Checker</h2>
        <form onSubmit={handleChecker} className="flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
            <input
              type="text"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Character count: {password.length}</p>
          </div>
          <div className="flex gap-2 mt-1">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap"
            >
              Check Password
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Clear
            </button>
          </div>
          {remarks && (
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-sm text-slate-700 dark:text-slate-300 flex flex-col gap-1">
              <p className="font-medium text-slate-900 dark:text-white">Status: {remarks}</p>
              <p>{message}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
