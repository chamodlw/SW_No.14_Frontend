import React, { useState, useEffect } from 'react';
import { AppBar, Tab, Tabs, Typography, Toolbar, useMediaQuery, useTheme, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem, Box } from '@mui/material/';
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
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <>
      <AppBar position="fixed" style={{ background: "#D9D9D9", transition: 'all 0.3s ease-in-out' }}>
      <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          style={{ mr: 2, display: { md: 'none' } }}
          onClick={handleDrawerToggle}
        >
          {isMobile && (
          <MenuIcon />
          )}
        </IconButton>
        {!scrolled ? (
          <>
            
            <Toolbar style={{ justifyContent: 'center' , }}>
              <Box display="flex" alignItems="center" style={{ marginTop: '15px' }}>
                <LocalHospitalTwoToneIcon fontSize="large" style={{ marginRight: '10px', color: '#101754', fontSize: '48px' }} />
                <Typography variant="h6" style={{ fontFamily: 'Helvetica', fontSize: '35px', color: '#101754' }}>
                  HealthLab
                </Typography>
              </Box>
            </Toolbar>
          {!isMobile && (
            <Toolbar style={{ justifyContent: 'center' }}>
              
                <Tabs>
                  <Tab label="Home" component={Link} to="/" style={{ fontSize: '18px', color: '#5A5959', margin: '0 12px' }} />
                  <Tab label="Services" component={Link} to="/services" style={{ fontSize: '18px', color: '#5A5959', margin: '0 12px' }} />
                  <Tab label="About us" component={Link} to="/about" style={{ fontSize: '18px', color: '#5A5959', margin: '0 12px' }} />
                  <Tab label="Contact us" component={Link} to="/contact" style={{ fontSize: '18px', color: '#5A5959', margin: '0 12px' }} />
                </Tabs>
              
            </Toolbar>
          )}

          </>
        ) : (
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <Box display="flex" alignItems="center">
              <LocalHospitalTwoToneIcon fontSize="large" style={{ marginRight: '10px', color: '#101754', fontSize: '35px' }} />
              <Typography variant="h6" style={{ fontFamily: 'Helvetica', fontSize: '30px', color: '#101754' }}>
                HealthLab
              </Typography>
            </Box>
            {!isMobile && (
              <Tabs style={{ marginLeft: 'auto', marginRight: '10%' }}>
                <Tab label="Home" component={Link} to="/" style={{ fontSize: '17px', color: '#5A5959', margin: '0 12px' }}/>
                <Tab label="Services" component={Link} to="/services" style={{ fontSize: '17px', color: '#5A5959', margin: '0 12px' }} />
                <Tab label="About us" component={Link} to="/about" style={{ fontSize: '17px', color: '#5A5959', margin: '0 12px' }}/>
                <Tab label="Contact us" component={Link} to="/contact" style={{ fontSize: '17px', color: '#5A5959', margin: '0 12px' }}/>
              </Tabs>
            )}
            <AccountCircleIcon 
              style={{ color: '#101754', fontSize: 42, cursor: 'pointer' }} 
              onClick={handleMenuOpen} 
            />
          </Toolbar>
        )}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          style={{ display: { md: 'none' } }}
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
      <Toolbar /> {/* This is an empty Toolbar component to push down the content */}
    </>
  );
}
