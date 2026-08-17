import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import GradeEvaluation from "./pages/GradeEvaluation"
import PasswordChecker from "./pages/PasswordChecker"
import ElectricityBill from "./pages/ElectricityBill"
import AttendanceChecker from "./pages/AttendanceChecker"

export default function App() {

  const activities = [
    {
      title: "Login",
      description: "A simple authentication form demonstrating controlled inputs and basic validation.",
      path: "/login",
    },
    {
      title: "Grade Evaluation",
      description: "Enter scores and instantly see computed grades and pass/fail results.",
      path: "/grade",
    },
    {
      title: "Password Checker",
      description: "Checks password strength in real time based on length and character variety.",
      path: "/password",
    },
    {
      title: "Electricity Bill",
      description: "Calculates estimated electricity costs based on usage input.",
      path: "/bill",
    },
    {
      title: "Attendance Checker",
      description: "Tracks and evaluates attendance records against a minimum requirement.",
      path: "/attendance",
    },
  ]

  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col overflow-hidden bg-linear-to-b from-slate-50 to-slate-100 dark:from-gray-950 dark:to-gray-900">
        <Navbar />
        <main className="app-scroll flex-1 min-h-0 overflow-y-auto snap-y snap-mandatory">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="h-full flex items-center justify-center px-4 snap-start">
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
                        <a
                          href="#activity-1"
                            className="px-5 py-2.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                          >
                            See More
                          </a>
                      </div>
                    </div>
                  </div>

                  {activities.map((activity, index) => (
                    <section
                      key={activity.path}
                      id={`activity-${index + 1}`}
                      className="h-full w-full flex items-center justify-center px-4 border-t border-slate-200 dark:border-gray-800 snap-start"
                    >
                      <div className="max-w-xl text-center">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wide text-indigo-600 bg-indigo-50 rounded-full uppercase">
                          Activity {index + 1}
                        </span>
                        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                          {activity.title}
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg mb-8">
                          {activity.description}
                        </p>
                        <Link
                          to={activity.path}
                          className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors inline-block"
                        >
                          Go to {activity.title}
                        </Link>
                      </div>
                    </section>
                  ))}
                </>
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