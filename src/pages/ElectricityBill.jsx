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
      setMessage("Please enter your customer name and electricity consumption.")
      return
    }

    const usage = Number(consumption)
    let totalBill

    if (usage >= 0 && usage <= 100) {
      setRate("₱10 per kWh")
      totalBill = usage * 10
    } else if (usage <= 200) {
      setRate("₱12 per kWh")
      totalBill = usage * 12
    } else if (usage <= 300) {
      setRate("₱15 per kWh")
      totalBill = usage * 15
    } else {
      setRate("₱18 per kWh")
      totalBill = usage * 18
    }

    setTotal(totalBill)

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
    setSubmittedName("")
  }

  const isHighUsage = message === "High Electricity Usage"

  return (
    <div className="min-h-full flex items-center justify-center px-4 py-10 bg-linear-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950/30 transition-colors duration-300">

      <div className="w-full max-w-lg">

        {/* Activity Tag */}
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Activity 4
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 overflow-hidden transition-colors duration-300">

          {/* Header */}
          <div className="relative px-8 pt-8 pb-7 bg-linear-to-br from-indigo-600 to-indigo-700 dark:from-indigo-600 dark:to-indigo-800 text-white overflow-hidden">
            <div className="relative flex items-center gap-4">

              {/* Electricity Icon */}
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
                    d="m13.5 2.25-9 11.25h6.75L10.5 21.75l9-11.25h-6.75l.75-8.25Z"
                  />
                </svg>
              </div>

              <div>
                <p className="text-indigo-100 text-xs font-semibold uppercase tracking-wider mb-1">
                  Utility Calculator
                </p>

                <h1 className="text-2xl font-bold">
                  Electricity Bill
                </h1>

                <p className="text-indigo-100 text-sm mt-1">
                  Calculate your estimated electricity bill.
                </p>
              </div>

            </div>
          </div>

          {/* Form Section */}
          <div className="p-8">

            <form onSubmit={handleCalculateBill}>

              {/* Customer Information */}
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
                    Customer Information
                  </h2>
                </div>

                {/* Customer Name */}
                <div className="mb-4">
                  <label
                    htmlFor="customer-name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Customer Name
                  </label>

                  <input
                    id="customer-name"
                    type="text"
                    placeholder="e.g. Kenneth Cole Ruperto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all"
                  />
                </div>

                {/* Consumption */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="consumption"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Electricity Consumption
                    </label>

                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                      kWh
                    </span>
                  </div>

                  <div className="relative">
                    <input
                      id="consumption"
                      type="number"
                      min="0"
                      placeholder="Enter consumption"
                      value={consumption}
                      onChange={(e) => setConsumption(e.target.value)}
                      className="w-full px-4 pr-14 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400 dark:text-slate-500">
                      kWh
                    </span>
                  </div>
                </div>

              </div>

              {/* Rate Information */}
              <div className="mb-6 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-100 dark:border-gray-700 p-4">

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Rates
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">

                  <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-700">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      0–100 kWh
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                      ₱10/kWh
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-700">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      101–200 kWh
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                      ₱12/kWh
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-700">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      201–300 kWh
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                      ₱15/kWh
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-700">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      301+ kWh
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                      ₱18/kWh
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
                  Calculate Bill
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

            {/* Bill Result */}
            {total !== "" && (
              <div className="mt-7 pt-7 border-t border-slate-100 dark:border-gray-800">
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Bill Summary
                  </p>

                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mt-1">
                    {getSubmittedName}
                  </h3>
                </div>

                {/* Total Bill */}
                <div className="rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 p-5 mb-3">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs font-medium text-indigo-600/70 dark:text-indigo-400/70 mb-1">
                        Estimated Total
                      </p>

                      <p className="text-3xl font-bold text-indigo-700 dark:text-indigo-400">
                        ₱{Number(total).toLocaleString("en-PH", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bill Details */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="px-4 py-3 rounded-lg bg-slate-50 dark:bg-gray-800/70">
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      Consumption
                    </p>

                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                      {Number(consumption).toLocaleString()} kWh
                    </p>
                  </div>

                  <div className="px-4 py-3 rounded-lg bg-slate-50 dark:bg-gray-800/70">
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      Applied Rate
                    </p>

                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                      {rate}
                    </p>
                  </div>
                </div>

                {/* Usage Status */}
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${
                    isHighUsage
                      ? "bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20"
                      : "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                      isHighUsage
                        ? "bg-amber-100 dark:bg-amber-500/10"
                        : "bg-emerald-100 dark:bg-emerald-500/10"
                    }`}
                  >
                    {isHighUsage ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 text-amber-600 dark:text-amber-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    )}
                  </div>

                  <div>
                    <p
                      className={`text-xs font-medium opacity-70 ${
                        isHighUsage
                          ? "text-amber-700 dark:text-amber-400"
                          : "text-emerald-700 dark:text-emerald-400"
                      }`}
                    >
                      Usage Status
                    </p>

                    <p
                      className={`text-sm font-bold ${
                        isHighUsage
                          ? "text-amber-700 dark:text-amber-400"
                          : "text-emerald-700 dark:text-emerald-400"
                      }`}
                    >
                      {message}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {total === "" && message && (
              <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20">
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
        </div>
      </div>
    </div>
  )
}