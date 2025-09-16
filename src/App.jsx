import { Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import DataTable from "./components/dashboard/DataTable"
import ProtectedRoutes from "./routes/ProtectedRoutes"
import { UsersProvider } from "./context/UsersContext"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<UsersProvider><ProtectedRoutes /></UsersProvider>}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DataTable />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>


      </Routes>
    </>
  )
}

export default App
