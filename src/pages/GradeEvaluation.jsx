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
    <div>
      <h2>Student Grade Evaluation</h2>
      <p>Activity 2</p>

      <form onSubmit={handleEvaluation}>
        <label>Student Name</label>
        <input type="text" placeholder="Enter Student Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Score</label>
        <input type="number" placeholder="Enter score (0-100)" value={getScore} onChange={(e) => setScore(e.target.value)}></input>
        <button type="submit">Evaluate</button>
        <button onClick={handleClear}>Clear</button>
        {remarks && (
          <div>
            <p>Student Name: {getSubmittedName}</p>
            <p>Score: {getSubmittedScore}</p>
            <p>Remarks: {remarks}</p>
          </div>
        )}
      </form>
    </div>
  )
}
