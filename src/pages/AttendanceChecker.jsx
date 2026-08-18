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
      setMessage("Please enter employee name and time in.")
      setRemarks("")
      return
    }

    const timeIn = Number(time)

    if (timeIn < 0 || timeIn > 24) {
      setRemarks("Invalid Time")
      setMessage("Please enter a valid time.")
      return
    }

    if (timeIn <= 8) {
      setRemarks("On Time")
      setMessage("Good Job!")
    } else if (timeIn <= 9) {
      setRemarks("Late")
      setMessage("Please be on time tomorrow.")
    } else {
      setRemarks("Very Late")
      setMessage("Report to your supervisor.")
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

  const getStatusStyle = () => {
    switch (remarks) {
      case "On Time":
        return {
          container:
            "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20",
          text: "text-emerald-700 dark:text-emerald-400",
          icon: "bg-emerald-100 dark:bg-emerald-500/10",
        }

      case "Late":
        return {
          container:
            "bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20",
          text: "text-amber-700 dark:text-amber-400",
          icon: "bg-amber-100 dark:bg-amber-500/10",
        }

      case "Very Late":
        return {
          container:
            "bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20",
          text: "text-red-700 dark:text-red-400",
          icon: "bg-red-100 dark:bg-red-500/10",
        }

      default:
        return {
          container:
            "bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20",
          text: "text-red-700 dark:text-red-400",
          icon: "bg-red-100 dark:bg-red-500/10",
        }
    }
  }

  const statusStyle = getStatusStyle()

  const isValidResult =
    remarks === "On Time" ||
    remarks === "Late" ||
    remarks === "Very Late"

  return (
    <div className="min-h-full flex items-center justify-center px-4 py-10 bg-linear-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950/30 transition-colors duration-300">

      <div className="w-full max-w-lg">

        {/* Activity Tag*/}
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Activity 5
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 overflow-hidden transition-colors duration-300">

          {/* Header */}
          <div className="relative px-8 pt-8 pb-7 bg-linear-to-br from-indigo-600 to-indigo-700 dark:from-indigo-600 dark:to-indigo-800 text-white overflow-hidden">
            <div className="relative flex items-center gap-4">

              {/* Attendance Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5v4.75l3 1.75"
                  />
                </svg>
              </div>

              <div>
                <p className="text-indigo-100 text-xs font-semibold uppercase tracking-wider mb-1">
                  Employee Monitoring
                </p>

                <h1 className="text-2xl font-bold">
                  Attendance Checker
                </h1>

                <p className="text-indigo-100 text-sm mt-1">
                  Check an employee's time-in status.
                </p>
              </div>

            </div>
          </div>

          {/* Form Section */}
          <div className="p-8">

            <form onSubmit={handleAttendanceCheck}>

              {/* Employee Information */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                      stroke="currentColor"
                      className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0"
                      />
                    </svg>
                  </div>

                  <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Employee Information
                  </h2>

                </div>

                {/* Employee Name */}
                <div className="mb-4">
                  <label
                    htmlFor="employee-name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Employee Name
                  </label>

                  <input
                    id="employee-name"
                    type="text"
                    placeholder="e.g. Kenneth Cole Ruperto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all"
                  />
                </div>

                {/* Time In */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="time-in"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Time In
                    </label>

                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      24-hour format
                    </span>
                  </div>

                  <div className="relative">
                    <input
                      id="time-in"
                      type="number"
                      min="0"
                      max="24"
                      step="0.01"
                      placeholder="e.g. 8.5 = 8:30 AM"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 pr-16 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400 dark:text-slate-500">
                      AM
                    </span>

                  </div>
                </div>
              </div>

              {/* Attendance Guide */}
              <div className="mb-6 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-100 dark:border-gray-700 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Attendance Guide
                    </span>
                  </div>

                  <span className="text-xs text-slate-400 dark:text-slate-500">
                    Time In
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {/* On Time */}
                  <div className="text-center px-2 py-2.5 rounded-lg bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-700">
                    <div className="w-7 h-7 mx-auto rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4 text-emerald-600 dark:text-emerald-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>

                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1.5">
                      ≤ 8:00 AM
                    </p>

                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                      On Time
                    </p>
                  </div>

                  {/* Late */}
                  <div className="text-center px-2 py-2.5 rounded-lg bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-700">
                    <div className="w-7 h-7 mx-auto rounded-full bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4 text-amber-600 dark:text-amber-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6l3 2"
                        />
                      </svg>
                    </div>

                    <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mt-1.5">
                      8:01–9:00
                    </p>

                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                      Late
                    </p>
                  </div>

                  {/* Very Late */}
                  <div className="text-center px-2 py-2.5 rounded-lg bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-700">
                    <div className="w-7 h-7 mx-auto rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4 text-red-600 dark:text-red-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>

                    <p className="text-xs font-bold text-red-600 dark:text-red-400 mt-1.5">
                      &gt; 9:00
                    </p>

                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                      Very Late
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-xl font-semibold shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 active:scale-[0.99] transition-all"
                >
                  Check Attendance
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-3 bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-gray-700 rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-gray-700 transition-all"
                >
                  Reset
                </button>
              </div>

            </form>

            {/* Error Message */}
            {message && !remarks && (
              <div className="mt-7 pt-7 border-t border-slate-100 dark:border-gray-800">
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
                    {message}
                  </p>

                </div>
              </div>
            )}

            {/* Attendance Result */}
            {remarks && (
              <div className="mt-7 pt-7 border-t border-slate-100 dark:border-gray-800">

                {isValidResult ? (

                  <div>

                    {/* Result Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Attendance Result
                        </p>

                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mt-1">
                          {getSubmittedName}
                        </h3>
                      </div>

                      {/* Time */}
                      <div className="text-right">
                        <p className="text-xs text-slate-400 dark:text-slate-500">
                          Time In
                        </p>

                        <p className="text-lg font-bold text-slate-800 dark:text-white mt-1">
                          {formatTime(getSubmittedTime)}
                        </p>
                      </div>
                    </div>

                    {/* Status */}
                    <div
                      className={`rounded-xl border p-5 ${statusStyle.container}`}
                    >
                      <div className="flex items-center justify-between">
                        <div>

                          <p
                            className={`text-xs font-medium mb-1 ${statusStyle.text} opacity-70`}
                          >
                            Attendance Status
                          </p>

                          <p
                            className={`text-xl font-bold ${statusStyle.text}`}
                          >
                            {remarks}
                          </p>

                          <p
                            className={`text-sm mt-2 ${statusStyle.text} opacity-80`}
                          >
                            {message}
                          </p>
                        </div>

                        <div
                          className={`w-11 h-11 rounded-full bg-white/70 dark:bg-black/10 flex items-center justify-center ${statusStyle.text}`}
                        >
                          {remarks === "On Time" ? (
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
                          ) : remarks === "Late" ? (
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
                                d="M12 6v6l3 2"
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
                                d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                ) : (

                  /* Error */
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
                      {message}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}