import { useState } from "react"

export default function PasswordChecker() {
  const [password, setPassword] = useState("")
  const [remarks, setRemarks] = useState("")

  const handleChecker = (e) => {
    e.preventDefault()

    if(!password) {
      setRemarks("Please enter a password")
      return
    }

    if (password.length < 6) {
      setRemarks("Weak Password")
    } else if (password.length >= 6 && password.length <= 9) {
      setRemarks("Medium Password")
    } else if (password.length >= 10) {
      setRemarks("Strong Password")
    }
  }

  const handleClear = () => {
    setPassword("")
    setRemarks("")
  }

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <p>Activity 3</p>

      <form onSubmit={handleChecker}>
        <label>Password</label>
        <input type="text" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <p>Character count: {password.length}</p>
        <button type="submit">Check Password</button>
        <button onClick={handleClear}>Clear</button>
        {remarks && <p>{remarks}</p>}
      </form>
    </div>
  )
}
