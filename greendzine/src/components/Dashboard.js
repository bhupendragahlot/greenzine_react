
import React from 'react';

const Dashboard = ({ onEmployeeIconClick }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={onEmployeeIconClick}>Employee Icon</button>
      {/* Add other dashboard content as needed */}
    </div>
  );
};

export default Dashboard;

