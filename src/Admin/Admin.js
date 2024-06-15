import React from 'react';
import { useUser } from './Admin_Component/UserContext';
import UsersTable from "../Components/UsersTable";
import Signin from "../Components/Signin";
import { Box } from "@mui/material";
import Axios from "axios";
import { useState, useEffect } from "react";

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        Axios.get('http://localhost:3100/api/router_login/users')
            .then(response => {
                setUsers(response?.data?.response || []);
            })
            .catch(error => {
                console.error("Axios Error:", error);
            });
    }

    const addUser = (data) => {
        const payload = {
            fullname: data.fullname,
            email: data.email,
            address: data.address,
            nationalID: data.nationalID,
            role: data.role,
            username: data.username,
            password: data.password
        };
        Axios.post('http://localhost:3100/api/router_login/createuser', payload)
            .then(() => {
                getUser();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error => {
                console.error("Axios Error:", error);
            });
    }

    const updateUser = (data) => {
        setSubmitted(true);
        const payload = {
            id: data.id,
            fullname: data.fullname,
            email: data.email,
            address: data.address,
            nationalID: data.nationalID,
            role: data.role,
            username: data.username,
            password: data.password
        };
        Axios.post('http://localhost:3100/api/router_login/updateuser', payload)
            .then(() => {
                getUser();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error => {
                console.error("Axios Error:", error);
            });
    }

    const deleteUser = (id) => {
        Axios.post('http://localhost:3100/api/router_login/deleteuser', { id })
            .then(() => {
                getUser();
            })
            .catch(error => {
                console.error("Axios Error:", error);
            });
    }

    return (
        <Box
            sx={{
                width: 'calc(100% - 80px)',
                margin: 'auto',
                marginTop: '100px'
            }}>
            <Signin
                addUser={addUser}
                updateUser={updateUser}
                deleteUser={deleteUser}
                submitted={submitted}
                data={selectedUser}
                isEdit={isEdit}
            />
            <UsersTable
                rows={users}
                selectedUser={data => {
                    setSelectedUser(data);
                    setIsEdit(true);
                }}
                deleteUser={data => window.confirm('Are You Sure?') && deleteUser(data)}
            />
        </Box>
    );
}

export default Admin;
