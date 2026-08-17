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
    <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-10">
        <p className="text-sm text-slate-500 dark:text-slate-400">Activity 4</p>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-5">Electricity Bill Calculator</h2>

        <form onSubmit={handleCalculateBill} className="flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Customer Name</label>
            <input
              type="text"
              placeholder="Enter customer name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Electricity Consumption (kWh)</label>
            <input
              type="number"
              placeholder="Enter consumption in kWh"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex gap-2 mt-1">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap"
            >
              Calculate Bill
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Clear
            </button>
          </div>
          {total !== "" && (
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-sm text-slate-700 dark:text-slate-300 flex flex-col gap-1">
              <p>Customer Name: {getSubmittedName}</p>
              <p>Rate: {rate}</p>
              <p className="font-medium text-slate-900 dark:text-white">Total Bill: ₱{total}</p>
              <p>{message}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
