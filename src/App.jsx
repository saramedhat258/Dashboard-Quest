import { Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import DataTable from "./components/dashboard/DataTable"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index path="dashboardData" element={<DataTable />} />
          <Route path="profile" element={<Profile />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
