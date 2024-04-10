import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from 'axios'; 
import Head from "./Head"; 
import Footer from './Footer';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false); 
    const [isEdit, setIsEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState({})

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response => {
                setUsers(response.data?.response || []);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            })
    }

    const addUser = (data) => {
        const payload = {
            id: data.id,
            name: data.name,
            test: data.test,
            test_tubes: data.test_tubes,
            blood_type: data.blood_type,
        };
    
        console.log('Payload:', payload); // Log payload data
    
        Axios.post('http://localhost:3001/api/createuser', payload)
        .then(() => {
            getUsers();
            setSubmitted(false);
            isEdit(false);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });
    };

    const updateUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
            test: data.test,
            test_tubes: data.test_tubes,
            blood_type: data.blood_type,
        };

        Axios.post('http://localhost:3001/api/updateuser', payload)
        .then(() => {
            getUsers();
            setSubmitted(false);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });

    }

    const deleteUser = (data) => {
        Axios.delete('http://localhost:3001/api/deleteuser', { data })
        .then(() => {
            getUsers();
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });
    }
    

    return (
        <Box>
            <Head /> {/* Include the Head component here */}
            <UserForm 
                addUser={addUser}
                updateUser={updateUser}
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
                deleteUser={data => window.confirm('Are you sure?') && deleteUser(data)}
            />
            <Footer />
        </Box>
    );
}

export default Users;
