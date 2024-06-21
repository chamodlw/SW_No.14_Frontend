import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button, Card, CardContent, Typography, Box, TextField, Snackbar, Alert, CircularProgress } from '@mui/material';
import axios from 'axios';
import './CheckoutForm.css';

const cardElementOptions = {
  style: {
    base: {
      color: "#424770",
      letterSpacing: "0.025em",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      "::placeholder": {
        color: "#aab7c4"
      },
      padding: '10px 14px',
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setMessage(error.message);
      setOpenSnackbar(true);
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post('http://localhost:5000/api/payment', {
        paymentMethodId: paymentMethod.id,
        amount: parseInt(amount),
        phoneNumber: phoneNumber // Include phone number in the request
      });

      setMessage(data.success ? 'Payment successful!' : `Payment failed: ${data.message}`);
    } catch (error) {
      setMessage('Server error: ' + error.message);
      console.error('Payment API error:', error);
    }

    setLoading(false);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
      <Card raised sx={{ maxWidth: 480, width: '100%', mx: 2, boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)' }}>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Secure Payment
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Amount"
              variant="outlined"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              sx={{ mb: 2 }}
              type="number"
              InputProps={{
                startAdornment: <Typography variant="h6" sx={{ marginRight: 1 }}>₹</Typography>
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              sx={{ mb: 2 }}
              type="tel"
            />
            <Box sx={{ mb: 2, border: '1px solid #ced4da', borderRadius: '4px', padding: '6px 12px' }}>
              <CardElement options={cardElementOptions} />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!stripe || loading}
              sx={{ py: 1.5, mt: 2, mb: 2, fontWeight: 'bold' }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Pay Now'}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ width: '100%' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          sx={{ width: '100%', fontSize: '1.1rem', '.MuiAlert-message': { fontSize: '1rem' } }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CheckoutForm;
