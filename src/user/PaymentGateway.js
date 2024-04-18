// PaymentGateway.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Card, CardContent, CardActions } from '@mui/material';
import { ReactComponent as VisaLogo } from './visa.svg';
import { ReactComponent as MastercardLogo } from './mastercard.svg';
import './PaymentGateway.css'; // Import custom CSS for styling

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the payment processing logic
    console.log('Payment submitted:', { cardNumber, cardHolderName, expiryDate, cvv });
  };

  return (
    <Container maxWidth="sm" className="payment-container">
      <Card className="payment-card">
        <CardContent>
          <Typography variant="h4" gutterBottom className="payment-header">
            Secure Payment Gateway
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Cardholder Name"
                  variant="outlined"
                  fullWidth
                  value={cardHolderName}
                  onChange={(e) => setCardHolderName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Card Number"
                  variant="outlined"
                  fullWidth
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Expiry Date"
                  variant="outlined"
                  fullWidth
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="CVV"
                  variant="outlined"
                  fullWidth
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
        <CardActions className="payment-actions">
          <Button type="submit" variant="contained" color="primary">
            Pay Now
          </Button>
        </CardActions>
        <div className="card-logos">
          <VisaLogo className="card-logo" />
          <MastercardLogo className="card-logo" />
        </div>
      </Card>
    </Container>
  );
};

export default PaymentGateway;
