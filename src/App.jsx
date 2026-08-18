import { DotLottiePlayer } from "@dotlottie/react-player"
import "@dotlottie/react-player/dist/index.css"

import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import GradeEvaluation from "./pages/GradeEvaluation"
import PasswordChecker from "./pages/PasswordChecker"
import ElectricityBill from "./pages/ElectricityBill"
import AttendanceChecker from "./pages/AttendanceChecker"

import LoginAnim from "./assets/animations/Animation_Login.json"
import GradeAnim from "./assets/animations/Animation_GradeEvaluation.json"
import PasswordAnim from "./assets/animations/Animation_PasswordChecker.json"
import BillAnim from "./assets/animations/Animation_ElectricityBill.json"
import AttendanceAnim from "./assets/animations/Animation_AttendanceChecker.json"
import DeveloperAnim from "./assets/animations/Animation_Developer.json"

export default function App() {

  const team = {
    members: [
      "NAVARRO, Christianne Marie",
      "REYNALDO, Zoe Claudette",
      "RUPERTO, Kenneth Cole",
      "TELEBRICO, Aila Jeane",
    ],
    animation: DeveloperAnim,
  }

  const activities = [
    {
      title: "Login Authentication",
      description: "A simple authentication form demonstrating controlled inputs and basic validation.",
      path: "/login",
      animation: LoginAnim,
    },
    {
      title: "Student Grade Evaluation",
      description: "Enter scores and instantly see computed grades and pass/fail results.",
      path: "/grade",
      animation: GradeAnim,
    },
    {
      title: "Password Strength Checker",
      description: "Checks password strength in real time based on length and character variety.",
      path: "/password",
      animation: PasswordAnim,
    },
    {
      title: "Electricity Bill Checker",
      description: "Calculates estimated electricity costs based on usage input.",
      path: "/bill",
      animation: BillAnim,
    },
    {
      title: "Employee Attendance Checker",
      description: "Tracks and evaluates attendance records against a minimum requirement.",
      path: "/attendance",
      animation: AttendanceAnim,
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
                      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
                        <div className="relative w-100 h-100 md:w-150 md:h-150 shrink-0">
                          <div className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors" />
                          <DotLottiePlayer
                            src={activity.animation}
                            autoplay
                            loop
                            className="relative z-10 w-full h-full"
                          />
                        </div>
                        <div className="text-center md:text-left">
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
                      </div>
                    </section>
                  ))}

                  <section
                    id="activity-6"
                    className="h-full w-full flex items-center justify-center px-4 border-t border-slate-200 dark:border-gray-800 snap-start"
                    >
                      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-start gap-10 md:gap-16">
                        <div className="relative w-100 h-100 md:w-150 md:h-150 shrink-0">
                          <div className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors" />
                          <DotLottiePlayer
                          src={team.animation}
                          autoplay
                          loop
                          className="relative z-10 w-full h-full"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wide text-indigo-600 bg-indigo-50 rounded-full uppercase">
                          Developers
                        </span>
                        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                          CanIt Code Members:
                        </h2>
                        <ul className="space-y-2">
                          {team.members.map((name) => (
                            <li
                              key={name}
                              className="text-slate-600 dark:text-slate-300 text-lg"
                            >
                              {name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
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