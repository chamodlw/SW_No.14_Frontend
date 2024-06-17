import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/Admin">Admin Home</Link></li>
          <li><Link to="/AddTest">Add Test</Link></li>
          <li><Link to="/AdminInterface">Admin Interface</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
