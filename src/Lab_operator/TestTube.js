// src/Lab_operator/TestTube.js

import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import TestTubeForm from './TestTubeForm';
import Head from "../Head"; 
import Footer from '../Footer';
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
        Axios.get('http://localhost:3100/api/test_tubes')
            .then(response => {
                console.log("Test tubes fetched successfully:", response.data);
                setTestTubes(response.data?.response || []);
            })
            .catch(error => {
                console.error("Error fetching test tubes:", error);
            });
    };

    const addTestTube = (data) => {
        return Axios.post('http://localhost:3100/api/createtest_tubes', data)
            .then(response => {
                getTestTubes();
                setSubmitted(false);
                setIsEdit(false);
                return response.data; // Return the response data to handle barcode
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    };

    const updateTestTube = (data) => {
        setSubmitted(true);
        Axios.post('http://localhost:3100/api/updatetest_tubes', data)
            .then(response => {
                getTestTubes();
                setSubmitted(false);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    };

    const deleteTestTube = (data) => {
        Axios.delete('http://localhost:3100/api/deletetest_tubes', { data })
            .then(response => {
                getTestTubes();
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    };

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
};

export default TestTube;
