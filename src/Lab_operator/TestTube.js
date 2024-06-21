// src/Lab_operator/TestTube.js

import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import TestTubeForm from './TestTubeForm';
import Head from "../Head"; 
import Footer from '../Footer';
import TestTubesTable from './TestTubesTable';
import SearchTestTubeForm from './SearchTestTubeForm';
import Axios from 'axios';
import jsPDF from 'jspdf';
import JsBarcode from 'jsbarcode';
import { createCanvas } from 'canvas';

const TestTube = () => {
    const [testTubes, setTestTubes] = useState([]);
    const [filteredTestTubes, setFilteredTestTubes] = useState([]);
    const [submitted, setSubmitted] = useState(false); 
    const [isEdit, setIsEdit] = useState(false);
    const [selectedTestTube, setSelectedTestTube] = useState({});

    useEffect(() => {
        getTestTubes();
    }, []);

    const getTestTubes = () => {
        Axios.get('http://localhost:3100/api/test_tubes')
            .then(response => {
                setTestTubes(response.data?.response || []);
                setFilteredTestTubes(response.data?.response || []);
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

    const handleSearch = (searchTerm) => {
        const filtered = testTubes.filter(tube =>
            tube.tube_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tube.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredTestTubes(filtered);
    };

    const handleGeneratePDF = (tube) => {
        const doc = new jsPDF();

        // Generate the barcode using JsBarcode
        const canvas = createCanvas();
        JsBarcode(canvas, tube._id, {
            format: "CODE128",
            displayValue: true,
            fontSize: 18,
        });

        // Convert canvas to data URL
        const barcodeDataURL = canvas.toDataURL('image/png');

        // Add barcode to PDF
        doc.text('Generated Barcode', 10, 10);
        doc.addImage(barcodeDataURL, 'PNG', 10, 20, 180, 40);
        doc.text(`Tube Type: ${tube.tube_type}`, 10, 70);
        doc.text(`Description: ${tube.description}`, 10, 80);
        doc.text(`Expiration Date: ${tube.expire_date}`, 10, 90);
        doc.text(`Manufacturer: ${tube.manufacturer}`, 10, 100);
        doc.text(`Location: ${tube.location}`, 10, 110);

        doc.save(`${tube.tube_type}_barcode.pdf`);
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
            <SearchTestTubeForm onSearch={handleSearch} />
            <TestTubesTable 
                rows={filteredTestTubes}
                selectedTestTube={data => {
                    setSelectedTestTube(data);
                    setIsEdit(true);
                }}
                deleteTestTube={data => window.confirm('Are you sure?') && deleteTestTube(data)}
                generatePDF={handleGeneratePDF}
            />
            <Footer />
        </Box>
    );
};

export default TestTube;
