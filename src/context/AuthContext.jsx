/* eslint-disable react-refresh/only-export-components */
import { useState, useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [authUser, setAuthUser] = useState(() => {
        const storedAuth = localStorage.getItem('authUser');
        return storedAuth
            ? JSON.parse(storedAuth)
            : {
                name: '',
                email: '',
                password: ''
            }
    })


    useEffect(() => {
        const authData = JSON.parse(localStorage.getItem('authUser'));
        if (authData) {
            setAuthUser(authData);
        }
    }, []);

    const login = (data) => {
        setAuthUser(data)
        localStorage.setItem('authUser', JSON.stringify(data))
    }

    const logout = () => {
        localStorage.removeItem('authUser')
        setAuthUser({
            name: '',
            email: '',
            password: ''
        });
        navigate('/')
    }

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser, logout, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}