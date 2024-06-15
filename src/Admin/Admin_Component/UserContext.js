// src/Admin/Admin_component/UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';


// Create two contexts for the user
const UserContext = createContext(null); //This context holds the user data
const UserUpdateContext = createContext(null); //provides the setUser function to update the user data.

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

// Custom hook to use the UserUpdateContext
export const useSetUser = () => {
  const context = useContext(UserUpdateContext);
  if (!context) {
    throw new Error('useSetUser must be used within a UserProvider');
  }
  console.log('useSetUser: Returning context');
  //return context.setUser;
  return context; // Return setUser function directly
};

// UserProvider component to wrap around the parts of my app that need access to the user data
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from my backend
    console.log('UserProvider: Fetching current user data');
    axios.get('http://localhost:3100/api/router_login/getCurrentUser')
      .then(response => {
        console.log('User data fetched:', response.data);
        setUser(response.data)
      })
      .catch(error => {
        console.error('UserProvider: Error fetching current user:', error)
        setUser(null);
      });
  }, []);

  console.log('UserProvider: Rendering provider with user:', user);
  
  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
};
