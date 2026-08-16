import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import GradeEvaluation from "./pages/GradeEvaluation"
import PasswordChecker from "./pages/PasswordChecker"
import ElectricityBill from "./pages/ElectricityBill"
import AttendanceChecker from "./pages/AttendanceChecker"

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to the React Activity Portal</h1>} />
            <Route path="/login" element={<Login />}/>
            <Route path="/grade" element={<GradeEvaluation />}/>
            <Route path="/password" element={<PasswordChecker />}/>
            <Route path="/bill" element={<ElectricityBill />}/>
            <Route path="/attendance" element={<AttendanceChecker />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
