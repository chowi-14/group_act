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
      setRemarks("Please enter your name and score.")
      return
    }

    if(getScore >= 90 && getScore<= 100 ) {
      setRemarks ("Excellent")
    } else if (getScore >= 85 && getScore <= 89) {
      setRemarks("Very Good")
    } else if (getScore >= 80 && getScore <= 84) {
      setRemarks("Good")
    } else if (getScore >= 75 && getScore <= 79) {
      setRemarks("Passed")
    } else if (getScore < 75) {
      setRemarks("Failed")
    } else {
      setRemarks("Invalid Score")
    }

    setSubmittedName(name)
    setSubmittedScore(getScore)
  }

  const handleClear = () => {
    setName("")
    setScore("")
    setRemarks("")
    setSubmittedName("")
    setSubmittedScore("")
  }

  return (
    <div className="h-full flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-10">
        <p className="text-sm text-slate-500 dark:text-slate-400">Activity 2</p>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-5">Student Grade Evaluation</h2>

        <form onSubmit={handleEvaluation} className="flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Student Name</label>
            <input
              type="text"
              placeholder="Enter Student Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Score</label>
            <input
              type="number"
              placeholder="Enter score (0-100)"
              value={getScore}
              onChange={(e) => setScore(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex gap-2 mt-1">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Evaluate
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
              <p>Student Name: {getSubmittedName}</p>
              <p>Score: {getSubmittedScore}</p>
              <p className="font-medium text-slate-900 dark:text-white">Remarks: {remarks}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
