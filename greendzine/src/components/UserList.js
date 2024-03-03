
import React, { useState } from 'react';

const UserList = () => {
  // Sample employee data
  const [searchQuery, setSearchQuery] = useState('');
  const [employees] = useState([ // Remove setEmployees
    { id: 1, name: 'John Doe', address: '123 Main St', contact: '123-456-7890', department: 'HR' },
    { id: 2, name: 'Jane Smith', address: '456 Elm St', contact: '987-654-3210', department: 'Marketing' },
    { id: 3, name: 'Rajesh Kumar', address: '789 Park Ave', contact: '555-123-4567', department: 'IT' },
    { id: 4, name: 'Amit Patel', address: '101 Oak St', contact: '333-222-1111', department: 'Finance' },
    { id: 5, name: 'Sunita Sharma', address: '246 Elm St', contact: '777-888-9999', department: 'HR' },
    { id: 6, name: 'Neha Gupta', address: '555 Pine St', contact: '444-555-6666', department: 'Marketing' },
    { id: 7, name: 'Sanjay Singh', address: '888 Cedar St', contact: '222-333-4444', department: 'Operations' },
    { id: 8, name: 'Anita Das', address: '333 Maple St', contact: '666-777-8888', department: 'IT' },
    { id: 9, name: 'Rohit Mishra', address: '999 Birch St', contact: '111-222-3333', department: 'Finance' },
    { id: 10, name: 'Priya Verma', address: '777 Spruce St', contact: '888-999-0000', department: 'Operations' },
    // Add more employee data as needed
  ]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>User List</h2>
      <input
        type="text"
        placeholder="Search by employee name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.address}</td>
              <td>{employee.contact}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
      
    </div>
    
  );
};

export default UserList;
