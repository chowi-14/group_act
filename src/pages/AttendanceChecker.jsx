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
    <div>
      <h2>Employee Attendance Checker</h2>
      <p>Activity 5</p>

      <form onSubmit={handleAttendanceCheck}>
        <label>Employee Name</label>
        <input type="text" placeholder="Enter employee name" value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Time In</label>
        <input type="number" placeholder="e.g. 8.5 = 8:30am" value={time} onChange={(e) => setTime(e.target.value)}/>
        <button type="submit">Check Attendance</button>
        <button onClick={handleReset}>Reset</button>
        { remarks && (
          <div>
            <p>Employee Name: {getSubmittedName}</p>
            <p>Time In: {formatTime(getSubmittedTime)}</p>
            <p>Attendance Status: {remarks}</p>
            <p>{message}</p>
          </div>
        )}
      </form>
    </div>
  )
}
