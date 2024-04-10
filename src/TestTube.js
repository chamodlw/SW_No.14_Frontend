import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import TestTubeForm from './TestTubeForm';
import Head from "./Head"; 
import Footer from './Footer';
import TestTubesTable from './TestTubesTable';
import Axios from 'axios';

const TestTube = () => {
    const [testTubes, setTestTubes] = useState([]);
    const [submitted, setSubmitted] = useState(false); 
    const [isEdit, setIsEdit] = useState(false);
    const [selectedTestTube, setSelectedTestTube] = useState({});

    useEffect(() => {
        getTestTubes();
    }, []);

    const getTestTubes = () => {
        console.log("Fetching test tubes...");
        Axios.get('http://localhost:3001/api/test_tubes')
            .then(response => {
                console.log("Test tubes fetched successfully:", response.data);
                setTestTubes(response.data?.response || []);
            })
            .catch(error => {
                console.error("Error fetching test tubes:", error);
            });
    };

    const addTestTube = (data) => {
        const payload = {
            tube_id: data.tube_id,
            tube_type: data.tube_type,
            description: data.description,
            expire_date: data.expire_date,
            location: data.location,
        };

        console.log('Payload:', payload); // Log payload data

        Axios.post('http://localhost:3001/api/createtest_tubes', payload)
            .then(() => {
                getTestTubes();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    };

    const updateTestTube = (data) => {
        setSubmitted(true);

        const payload = {
            tube_id: data.tube_id,
            tube_type: data.tube_type,
            description: data.description,
            expire_date: data.expire_date,
            location: data.location,
        };

        Axios.post('http://localhost:3001/api/updatetest_tubes', payload)
            .then(() => {
                getTestTubes();
                setSubmitted(false);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });

    };

    const deleteTestTube = (data) => {
        Axios.delete('http://localhost:3001/api/deletetest_tubes', { data })
        .then(() => {
            getTestTubes();
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });
    }

    return (
        <Box>
            <Head />
            <TestTubeForm 
                addTestTube={addTestTube}
                updateTestTube={updateTestTube}
                submitted={submitted}
                data={selectedTestTube}
                isEdit={isEdit}
            />
            {/* {testTubes.length > 0 && <TestTubesTable rows={testTubes} />} */}

            <TestTubesTable 
                rows={testTubes}
                selectedTestTube={data => {
                    setSelectedTestTube(data);
                    setIsEdit(true);
                }}
                deleteTestTube={data => window.confirm('Are you sure?') && deleteTestTube(data)}
            />

            <Footer />
        </Box>
    );
}

export default TestTube;
