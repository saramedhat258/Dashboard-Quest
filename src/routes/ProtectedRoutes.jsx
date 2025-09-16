import { useAuth } from "../context/AuthContext"
import { Outlet, Navigate } from "react-router-dom"

function ProtectedRoutes() {
    const { authUser } = useAuth()
    if (!authUser.name) {
        return <Navigate to='/' />
    }
    return <Outlet />
}

export default ProtectedRoutes