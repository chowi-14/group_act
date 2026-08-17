import { useState } from "react"

export default function ElectricityBill() {
  const [name, setName] = useState("")
  const [consumption, setConsumption] = useState("")
  const [rate, setRate] = useState("")
  const [total, setTotal] = useState("")
  const [message, setMessage] = useState("")
  const [getSubmittedName, setSubmittedName] = useState("")

  const handleCalculateBill = (e) => {
    e.preventDefault()

    if (!name || !consumption) {
      setMessage("Please enter your customer name or electricity consumption")
      return
    }

    let totalBill 
    if (consumption >= 0 && consumption <= 100) {
      setRate("₱10 per kWh")
      totalBill = consumption * 10
      setTotal(totalBill)
    } else if (consumption >= 101 && consumption <= 200) {
      setRate("₱12 per kWh")
      totalBill = consumption * 12
      setTotal(totalBill)
    } else if (consumption >= 201 && consumption <= 300) {
      setRate("₱15 per kWh")
      totalBill = consumption * 15
      setTotal(totalBill)
    } else if (consumption > 300) {
      setRate("₱18 per kWh")
      totalBill = consumption * 18
      setTotal(totalBill)
    }

    if (totalBill >= 5000) {
      setMessage("High Electricity Usage")
    } else {
      setMessage("Normal Electricity Usage")
    }

    setSubmittedName(name)
  }

  const handleClear = () => {
    setName("")
    setConsumption("")
    setRate("")
    setTotal("")
    setMessage("")
  }

  return (
    <div>
      <h2>Electricity Bill Calculator</h2>
      <p>Activity 4</p>

      <form onSubmit={handleCalculateBill}>
        <label>Customer Name</label>
        <input type="text" placeholder="Enter customer name" value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>Electricity Consumption (kWh)</label>
        <input type="number" placeholder="Enter consumption in kWh" value={consumption} onChange={(e) => setConsumption(e.target.value)}></input>
        <button type="submit">Calculate Bill</button>
        <button onClick={handleClear}>Clear</button>
        {total !== "" && (
        <div>
          <p>Customer Name: {getSubmittedName}</p>
          <p>Rate: {rate}</p>
          <p>Total Bill: ₱{total}</p>
          <p>{message}</p>
        </div>
      )}
      </form>
    </div>
  )
}
