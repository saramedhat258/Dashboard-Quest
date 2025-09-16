/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const UsersContext = createContext()
export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState(null)
    const [error, setError] = useState('')
    const [modal, setModal] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [editData, setEditData] = useState(false)
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');


    /* fetch all users, search, paginate */
    const fetchUsers = async (page = 1, searchTerm = '') => {
        try {
            const limit = 5;
            const skip = (page - 1) * limit;

            const url = searchTerm
                ? `https://dummyjson.com/users/search?q=${searchTerm}&limit=${limit}&skip=${skip}`
                : `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;

            const res = await fetch(url);
            if (!res.ok) {
                setError(`HTTP error! Status: ${res.status}`);
                return;
            }
            const data = await res.json();
            setUsers(data.users);
        } catch (err) {
            setError(err.message || "Something went wrong");
        }
    };


    /*add new user */
    const addUser = async (newUser) => {
        try {
            const res = await fetch('https://dummyjson.com/users/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            })
            const data = await res.json()
            const newuser = { ...data, id: newUser.id, islocal: true }
            setUsers([...users, newuser])
        } catch (err) {
            setError(err.message || "Failed to add new user");
        }
    }

    /*update user */
    const updateUser = async (updatedData, id) => {
        /* to update local updated data */
        const user = users.find(u => u.id === id);
        if (user?.islocal) {
            setUsers(prev =>
                prev.map(u => u.id === id ? { ...u, ...updatedData } : u)
            );
        }
        else {
            try {
                const res = await fetch(`https://dummyjson.com/users/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatedData)
                })
                const data = await res.json()

                setUsers(prev =>
                    prev.map(user =>
                        user.id === id ? { ...user, ...data } : user
                    )
                )
            } catch (error) {
                setError(error.message)
            }
        }
    }

    /*delete user*/
    const deleteUser = async (id) => {
        /* to delete local data */
        const user = users.find(u => u.id === id);
        if (user?.islocal) {
            setUsers((prev) => prev.filter((user) => user.id !== id));
        }
        else {
            try {
                await fetch(`https://dummyjson.com/users/${id}`, {
                    method: "DELETE",
                });
                setUsers((prev) => prev.filter((user) => user.id !== id));
            } catch (err) {
                setError(err.message);
            }
        }
    };

    useEffect(() => {
        fetchUsers(page, searchTerm);
    }, [page,searchTerm]);
    return (
        <UsersContext.Provider value={{ users, error, addUser, modal, setModal, editMode, setEditMode, editData, setEditData, updateUser, deleteUser, page, setPage, searchTerm, setSearchTerm }}>
            {children}
        </UsersContext.Provider>
    )
}

export const useUsers = () => useContext(UsersContext);