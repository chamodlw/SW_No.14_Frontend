import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Paper } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'; 
import Patienthead from '../Components/Patienthead';
import Footer from '../Components/Footer'; 
import TestResultForm from './TestResultForm'; 
import SearchUserForm from './SearchUserForm';  // Import SearchUserForm
import TestresulltTable from './TestresultTable';

const TestResult = () => {
    const [testResult, setTestResult] = useState([]);
    const [filteredResult, setFilteredResult] = useState([]);
    const [submitted, setSubmitted] = useState(false); 
    const [isEdit, setIsEdit] = useState(false);
    const [selectedResult, setSelectedResult] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getTestResult();
    }, []);

    const getTestResult = () => {
        Axios.get('http://localhost:3100/api/getResults')
            .then(response => {
                setTestResult(response.data?.response || []);
                setFilteredResult(response.data?.response || []);
            })
            .catch(error => {
                console.error("Error fetching test results:", error);
            });
    };

    const testresult = (data) => { // Changed function name to testresult
        const payload = {
            uid:data.uid,
            id: data.id,
            nm: data.nm,
            testtype: data.testtype,
            tr: data.tr,
        };
    
        console.log('Payload:', payload); // Log payload data
    
        Axios.post('http://localhost:3100/api/testresult', payload)
        .then(() => {
            getTestResult();
            setSubmitted(false);
            setIsEdit(false);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });
    };

    const updateResults = (data) => {
        setSubmitted(true);

        const payload = {
            uid:data.uid,
            id: data.id,
            nm: data.nm,
            testtype: data.testtype,
            tr: data.tr,
        };

        Axios.post('http://localhost:3100/api/updateResults', payload)
        .then(() => {
            getTestResult();
            setSubmitted(false);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });
    };

    const deleteResults = (data) => {
        Axios.delete('http://localhost:3100/api/deleteResults', { data })
        .then(() => {
            getTestResult();
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });
    };

    const handleSearch = (searchTerm) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const filtered = testResult.filter(result =>
            String(result.id).toLowerCase().includes(lowerCaseSearchTerm) ||
            String(result.nm).toLowerCase().includes(lowerCaseSearchTerm) ||
            String(result.testtype).toLowerCase().includes(lowerCaseSearchTerm)
        );
        setFilteredResult(filtered);
    };

    return (
        <Box>
            <Patienthead /> {/* Include the Head component here */}
            
            <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <TestResultForm 
                                testresult={testresult} // Updated prop name
                                updateResults={updateResults}
                                submitted={submitted}
                                data={selectedResult}
                                isEdit={isEdit}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <SearchUserForm onSearch={handleSearch} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <TestresulltTable 
                                rows={filteredResult} 
                                selectedResult={data => {
                                    setSelectedResult(data);
                                    setIsEdit(true);
                                }}
                                deleteResults={data => window.confirm('Are you sure?') && deleteResults(data)}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
}

export default TestResult;
