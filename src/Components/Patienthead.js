import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Typography, Toolbar, useMediaQuery, useTheme, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material/';
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Patienthead() {
  const { id: userId } = useParams(); // Use useParams to get userId from URL
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    handleMenuClose();
    navigate(`/UserProfile/${userId}`);
  };

  const handleLogoutClick = () => {
    handleMenuClose();
    // Clear user data and navigate to login
    localStorage.removeItem('user');
    navigate('/login');
  };

  const drawer = (
    <div>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/services">
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About us" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact us" />
        </ListItem>
        <ListItem button component={Link} to={`/UserProfile/${userId}`}>
        <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button onClick={handleLogoutClick}>
        <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="static" sx={{ background: "#D9D9D9" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { md: 'none' } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Helvetica', fontSize: '30px', color: '#101754', flexGrow: 1 }}>
          <LocalHospitalTwoToneIcon fontSize="large" style={{ marginRight: '10px', color: '#101754' }} />
          HealthLab
        </Typography>
        {!isMobile ? (
          <>
            <Tabs sx={{ marginLeft: 'auto' }}>
              <Tab label="Home" component={Link} to="/" />
              <Tab label="Services" component={Link} to="/services" />
              <Tab label="About us" component={Link} to="/about" />
              <Tab label="Contact us" component={Link} to="/contact" />
            </Tabs>
            <AccountCircleIcon 
              sx={{ color: '#101754', fontSize: 42, marginLeft: '30px', cursor: 'pointer' }} 
              onClick={handleMenuOpen} 
            />
          </>
        ) : null}
      </Toolbar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { md: 'none' } }}
      >
        {drawer}
      </Drawer>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
