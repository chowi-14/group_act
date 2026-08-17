import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import GradeEvaluation from "./pages/GradeEvaluation"
import PasswordChecker from "./pages/PasswordChecker"
import ElectricityBill from "./pages/ElectricityBill"
import AttendanceChecker from "./pages/AttendanceChecker"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-950 dark:to-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-center max-w-2xl">
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wide text-indigo-600 bg-indigo-50 rounded-full uppercase">
                    CanIt Code
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                    Welcome to the{" "}
                    <span className="text-indigo-600">React Activity Portal</span>
                  </h1>
                  <p className="text-slate-500 dark:text-slate-400 text-lg mb-8">
                    5 engaging activities, all seamlessly connected through one shared Navigation Bar.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link
                      to="/login"
                      className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                    >
                      Get Started
                    </Link>
                    <Link
                      to="/"
                      className="px-5 py-2.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/grade" element={<GradeEvaluation />} />
            <Route path="/password" element={<PasswordChecker />} />
            <Route path="/bill" element={<ElectricityBill />} />
            <Route path="/attendance" element={<AttendanceChecker />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}