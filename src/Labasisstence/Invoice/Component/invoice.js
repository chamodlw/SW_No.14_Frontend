// InvoiceTemplate.js
import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import healthLabLogo from "../../LabasisstenceComponent/Labasisstenceimg/Health lab logo_.png";

// start Function 

const Invoice = ((id) => {

    // State variables 

  const [record, setRecord] = useState(null);
  const [testDB, setTestsDB] = useState(null);
  const [total, srtTotal] = useState("0");

//   function for get tests data

  useEffect(() => {
    async function getTestData() {
      const response = await fetch(`http://localhost:3100/tests`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const testData = await response.json();
      setTestsDB(testData.response);
    }
    getTestData();
    return;
  }, []);

// funtion for get patiant appoinment data


  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3100/api/appoinments/2`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      setRecord(records.response);
    }
    getRecords();
  }, [id]);




  if (!record) {
    return <Typography>Loading...</Typography>;
  }


//   make object for invoice data

  const inVoiceData = record.selectTests.map((test) => ({
    testID: test.testId,
    testName: test.testName,
    price:
      testDB.find((dbTest) => dbTest.id === test.testId)?.price || "no data",
    description:
      testDB.find((dbTest) => dbTest.id === test.testId)?.description ||
      "no data",
  }));

  const invoiceTotalAmount = inVoiceData.reduce(
    (acc, item) => acc + (item.price || 0),
    0
  );

//   invoice display data object

  const invoiceDetails = {
    appointmentId: record.id || "INV-001",
    date: new Date().toISOString().split("T")[0],
    dueDate: record.dueDate || "2024-07-24",
    companyAddress:
      record.companyAddress || "1234 Main St, City, State, ZIP lab address",
    customerName: record.pname || "John Doe",
    customerAddress:
      record.customerAddress ||
      "5678 Second St, City, State, ZIP costumer address",
    items: inVoiceData || [
      { id: 1, description: "Item 1", quantity: 2, price: 50 },
      { id: 2, description: "Item 2", quantity: 1, price: 100 },
      { id: 3, description: "Item 3", quantity: 3, price: 30 },
    ],
  };

  const columns = [
    { field: "Test", headerName: "Test", width: 70 },
    { field: "description", headerName: "Description", width: 150 },
    { field: "quantity", headerName: "", width: 100 },
    { field: "price", headerName: "Price", width: 100 },
  ];


//   Invoice UI rendaring items

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Invoice
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper sx={{ width: "30%" }}>
              <img
                src={healthLabLogo}
                alt="logo"
                style={{ width: "100%", height: "auto" }}
              />
            </Paper>
            <Typography>{invoiceDetails.companyAddress}</Typography>
          </Grid>
          <Grid item xs={6} align="right">
            <Typography variant="h6">{invoiceDetails.customerName}</Typography>
            <Typography>{invoiceDetails.customerAddress}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop={2}>
          <Grid item xs={6}>
            <Typography>
              <strong>Appoinment ID:</strong> {invoiceDetails.appointmentId}
            </Typography>
            <Typography>
              <strong>Date:</strong> {invoiceDetails.date}
            </Typography>
          </Grid>
          <Grid item xs={6} align="right">
            <Typography>
              <strong>Due Date:</strong> {invoiceDetails.dueDate}
            </Typography>
          </Grid>
        </Grid>
        <TableContainer component={Paper} sx={{ marginTop: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.field}>{column.headerName}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {inVoiceData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.testName}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{}</TableCell>
                  <TableCell>{item.price}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={3} align="right">
                  <strong>Total:</strong>
                </TableCell>
                <TableCell>{invoiceTotalAmount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2} marginTop={3}>
          <Grid
            item
            sx={{
              display: "grid",
              gridArea: "printButton",
              placeSelf: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.print()}
            >
              Print
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
});

export default Invoice;
