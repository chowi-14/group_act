import { useState } from "react"

export default function AttendanceChecker() {
  const [name, setName] = useState("")
  const [time, setTime] = useState("")
  const [remarks, setRemarks] = useState("")
  const [message, setMessage] = useState("")
  const [getSubmittedName, setSubmittedName] = useState("")
  const [getSubmittedTime, setSubmittedTime] = useState("")

  const formatTime = (decimalTime) => {
    const num = parseFloat(decimalTime)
    let hours = Math.floor(num)
    const minutes = Math.round((num - hours) * 60)

    const period = hours >= 12 ? "PM" : "AM"
    let displayHours = hours % 12
    if (displayHours === 0) displayHours = 12

    const displayMinutes = minutes.toString().padStart(2, "0")

    return `${displayHours}:${displayMinutes} ${period}`
  }

  const handleAttendanceCheck = (e) => {
    e.preventDefault()

    if (!name || !time) {
      setMessage("Please enter your name or time in.")
      return
    }

    if (time <= 8) {
      setRemarks("On Time")
      setMessage("Good Job!")
    } else if (time <= 9 ) {
      setRemarks("Late")
      setMessage("Please be on time tomorrow.")
    } else {
      setRemarks("Very Late")
      setMessage("Report to your supervisor")
    }

    setSubmittedName(name)
    setSubmittedTime(time)
  }

  const handleReset = () => {
    setName("")
    setTime("")
    setRemarks("")
    setMessage("")
    setSubmittedName("")
    setSubmittedTime("")
  }
  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-10">
        <p className="text-sm text-slate-500 dark:text-slate-400">Activity 5</p>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-5">Employee Attendance Checker</h2>

        <form onSubmit={handleAttendanceCheck} className="flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Employee Name</label>
            <input
              type="text"
              placeholder="Enter employee name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Time In</label>
            <input
              type="number"
              placeholder="e.g. 8.5 = 8:30am"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex gap-2 mt-1">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap"
            >
              Check Attendance
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Reset
            </button>
          </div>
          {remarks && (
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-sm text-slate-700 dark:text-slate-300 flex flex-col gap-1">
              <p>Employee Name: {getSubmittedName}</p>
              <p>Time In: {formatTime(getSubmittedTime)}</p>
              <p className="font-medium text-slate-900 dark:text-white">Attendance Status: {remarks}</p>
              <p>{message}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
