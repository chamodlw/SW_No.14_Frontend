import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button, Typography, Grid, Modal } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardContainer: {
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
  },
  card: {
    minWidth: 275,
    display: 'inline-block',
    margin: theme.spacing(2),
    transition: 'transform 0.3s ease',
    cursor: 'pointer', // Add cursor pointer for better UX
  },
  button: {
    textTransform: 'none',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    
  },
}));

const CardSlider = ({ cards }) => {
  const classes = useStyles();
  const [position, setPosition] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    setPosition((prevPosition) => Math.min(prevPosition + 1, cards.length - 2));
  };

  const handlePrev = () => {
    setPosition((prevPosition) => Math.max(prevPosition - 1, 0));
  };

  const handleCardClick = (index) => {
    setSelectedCard(cards[index]);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleAction = () => {
    // Define actions based on the selected card
    if (selectedCard) {
      if (selectedCard.title === 'ADD NEW') {
        navigate(`/AddTest/`);
      } else if (selectedCard.title === 'AVAILABLE TESTS') {
        navigate(`/ViewTest/`);
      } else if (selectedCard.title === 'APPOINTMENTS') {
        // Handle appointments action
      }
    }
    handleCloseModal();
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={1}>
          <Button onClick={handlePrev} disabled={position === 0}><ArrowBackIosIcon/></Button>
        </Grid>
        <Grid item xs={10}>
          <div className={classes.cardContainer}>
            {cards.map((card, index) => (
              <Card
                key={index}
                className={classes.card}
                style={{ transform: `translateX(-${position * 100}%)` }}
                onClick={() => handleCardClick(index)}
              >
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {card.content}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </Grid>
        <Grid item xs={1}>
          <Button onClick={handleNext} disabled={position === cards.length - 2}><ArrowForwardIosIcon/></Button>
        </Grid>
      </Grid>
      <Modal
        className={classes.modal}
        open={Boolean(selectedCard)}
        onClose={handleCloseModal}
      >
        <div className={classes.paper}>
          <h2>{selectedCard && selectedCard.title}</h2>
          <p>{selectedCard && selectedCard.content}</p>
          <Button onClick={handleAction} color="primary">Take Action</Button>
        </div>
      </Modal>
    </div>
  );
};

// Usage
const MyComponent = () => {
  const cards = [
    { title: 'ADD NEW', content: 'Add new tests to the system' },
    { title: 'AVAILABLE TESTS', content: 'View currently available test types' },
    { title: 'APPOINTMENTS', content: 'Patient appointments to blood tests' },
    // Add more cards as needed
  ];

  return <CardSlider cards={cards} />;
};

export default MyComponent;
