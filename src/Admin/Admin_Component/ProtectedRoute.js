// ProtectedRoute.js
// src/Admin/Admin_component/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from './UserContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const {user, isReady} = useUser();
  
  console.log('ProtectedRoute - User:', user);
  if (!isReady) {
    console.log('ProtectedRoute - Checking authentication status...');
    return <h1>Fetching user data</h1>;
  }
  
  // Log the user object
  console.log('ProtectedRoute - User:', user);

  // Log the user's role and allowed roles
  console.log('ProtectedRoute - User:', user);
  console.log('ProtectedRoute - User role:', user?.role);
  console.log('ProtectedRoute - Allowed roles:', allowedRoles);

    // If user is not available, redirect to home
    if (user== null) {
      // if (!user) {
      console.log('ProtectedRoute - No user, redirecting to home');
      return <Navigate to="/" replace />;
    }
    
  // If user role is not allowed, redirect to home
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    console.log('ProtectedRoute - User role not allowed, redirecting to home');
    return <Navigate to="/" replace />;
  }

  // If user is authenticated and has the correct role, render the child routes
  console.log('ProtectedRoute - User authenticated and has correct role, rendering child routes');
  return <Outlet />;
};

export default ProtectedRoute;


//There can be instances where, the user data is not being correctly passed or retained in the ProtectedRoute component, while it is correctly fetching through Login.js, AdminInterface.js.