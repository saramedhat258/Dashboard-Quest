import { useAuth } from "../context/AuthContext"
import { Outlet, Navigate } from "react-router-dom"

function ProtectedRoutes() {
    const { authUser } = useAuth()
    if (!authUser.name) {
        return <Navigate to='/' replace />
    }
    return <Outlet />
}

export default ProtectedRoutes