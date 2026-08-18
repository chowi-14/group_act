import { useState } from "react"

export default function GradeEvaluation() {
  const [name, setName] = useState("")
  const [getScore, setScore] = useState("")
  const [remarks, setRemarks] = useState("")
  const [getSubmittedName, setSubmittedName] = useState("")
  const [getSubmittedScore, setSubmittedScore] = useState("")

  const handleEvaluation = (e) => {
    e.preventDefault()

    if (!name || !getScore) {
      setRemarks("Please enter student name and score.")
      return
    }

    const score = Number(getScore)

    if (score < 0 || score > 100) {
      setRemarks("Invalid Score")
    } else if (score >= 90) {
      setRemarks("Excellent")
    } else if (score >= 85) {
      setRemarks("Very Good")
    } else if (score >= 80) {
      setRemarks("Good")
    } else if (score >= 75) {
      setRemarks("Passed")
    } else {
      setRemarks("Failed")
    }

    setSubmittedName(name)
    setSubmittedScore(score)
  }

  const handleClear = () => {
    setName("")
    setScore("")
    setRemarks("")
    setSubmittedName("")
    setSubmittedScore("")
  }

  const isResult =
    getSubmittedName &&
    getSubmittedScore !== "" &&
    ["Excellent", "Very Good", "Good", "Passed", "Failed"].includes(remarks)

  const getResultStyle = () => {
    switch (remarks) {
      case "Excellent":
        return {
          container:
            "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20",
          text: "text-emerald-700 dark:text-emerald-400",
          score: "text-emerald-600 dark:text-emerald-400",
        }

      case "Very Good":
        return {
          container:
            "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20",
          text: "text-blue-700 dark:text-blue-400",
          score: "text-blue-600 dark:text-blue-400",
        }

      case "Good":
        return {
          container:
            "bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20",
          text: "text-indigo-700 dark:text-indigo-400",
          score: "text-indigo-600 dark:text-indigo-400",
        }

      case "Passed":
        return {
          container:
            "bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20",
          text: "text-amber-700 dark:text-amber-400",
          score: "text-amber-600 dark:text-amber-400",
        }

      case "Failed":
        return {
          container:
            "bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20",
          text: "text-red-700 dark:text-red-400",
          score: "text-red-600 dark:text-red-400",
        }

      default:
        return {
          container:
            "bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20",
          text: "text-red-700 dark:text-red-400",
          score: "text-red-600 dark:text-red-400",
        }
    }
  }

  const resultStyle = getResultStyle()

  return (
    <div className="min-h-full flex items-center justify-center px-4 py-10 bg-linear-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950/30 transition-colors duration-300">
      <div className="w-full max-w-lg">

        {/* Activity Tag */}
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Activity 2
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 overflow-hidden transition-colors duration-300">

          {/* Header */}
          <div className="relative px-8 pt-8 pb-7 bg-linear-to-br from-indigo-600 to-indigo-700 dark:from-indigo-600 dark:to-indigo-800 text-white">
            <div className="relative flex items-center gap-4">

              {/* Grade Icon */}
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
                    d="M4.5 3.75h15A1.5 1.5 0 0 1 21 5.25v13.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.75V5.25a1.5 1.5 0 0 1 1.5-1.5Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9M7.5 12h3M7.5 15.75h9"
                  />
                </svg>
              </div>

              <div>
                <p className="text-indigo-100 text-xs font-semibold uppercase tracking-wider mb-1">
                  Grade Checker
                </p>

                <h1 className="text-2xl font-bold">
                  Student Grade Evaluation
                </h1>

                <p className="text-indigo-100 text-sm mt-1">
                  Evaluate a student's academic performance.
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8">
            <form onSubmit={handleEvaluation}>

              {/* Student Information */}
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
                    Student Information
                  </h2>
                </div>

                {/* Name */}
                <div className="mb-4">
                  <label
                    htmlFor="student-name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Student Name
                  </label>

                  <input
                    id="student-name"
                    type="text"
                    placeholder="e.g. Kenneth Cole Ruperto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all"
                  />
                </div>

                {/* Score */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="student-score"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Score
                    </label>

                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                      Maximum: 100
                    </span>
                  </div>

                  <div className="relative">
                    <input
                      id="student-score"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="Enter score"
                      value={getScore}
                      onChange={(e) => setScore(e.target.value)}
                      className="w-full px-4 pr-16 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400 dark:text-slate-500">
                      / 100
                    </span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-xl font-semibold shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 active:scale-[0.99] transition-all"
                >
                  Check Grade
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  className="px-5 py-3 bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-gray-700 rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-gray-700 transition-all"
                >
                  Clear
                </button>
              </div>
            </form>

            {/* Result */}
            {remarks && (
              <div className="mt-7 pt-7 border-t border-slate-100 dark:border-gray-800">
                {isResult ? (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Evaluation Result
                        </p>

                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mt-1">
                          {getSubmittedName}
                        </h3>
                      </div>

                      <div className="text-right">
                        <p className="text-xs text-slate-400 dark:text-slate-500">
                          Score
                        </p>

                        <p className={`text-2xl font-bold ${resultStyle.score}`}>
                          {getSubmittedScore}
                        </p>
                      </div>
                    </div>

                    {/* Main Result */}
                    <div
                      className={`rounded-xl border p-5 ${resultStyle.container}`}
                    >
                      <div className="flex items-center justify-between">

                        <div>
                          <p className={`text-xs font-medium mb-1 ${resultStyle.text} opacity-70`}>
                            Performance Rating
                          </p>

                          <p className={`text-xl font-bold ${resultStyle.text}`}>
                            {remarks}
                          </p>
                        </div>

                        <div className={`w-11 h-11 rounded-full bg-white/70 dark:bg-black/10 flex items-center justify-center ${resultStyle.text}`}>
                          {remarks === "Failed" ? (
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
                                d="M6 18 18 6M6 6l12 12"
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
                  </div>

                ) : (

                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20">
                    <div className="flex items-center gap-3">
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
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Grading Scale */}
          <div className="px-8 pb-8">
            <div className="rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-100 dark:border-gray-700 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Grading Scale
                </span>

                <span className="text-xs text-slate-400 dark:text-slate-500">
                  Score Range
                </span>
              </div>

              <div className="grid grid-cols-5 gap-1.5">

                <div className="text-center">
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    90+
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                    Excellent
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                    85–89
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                    Very Good
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    80–84
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                    Good
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-xs font-bold text-amber-600 dark:text-amber-400">
                    75–79
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                    Passed
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-xs font-bold text-red-600 dark:text-red-400">
                    &lt;75
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                    Failed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}