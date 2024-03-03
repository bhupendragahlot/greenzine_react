

// App.js
// import React, { useState } from 'react';
// import LoginForm from './components/LoginFrom';
// import Dashboard from './components/Dashboard';
// import UserList from './components/UserList';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = (username, password) => {
//     // Perform login logic (e.g., API call) here
//     // For demonstration purposes, let's consider a simple check
//     if (username === 'user' && password === 'password') {
//       setIsLoggedIn(true);
//     } else {
//       alert('Invalid username or password.');
//     }
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           <Dashboard />
//           <UserList />
//         </div>
//       ) : (
//         <LoginForm onLogin={handleLogin} />
//       )}
//     </div>
//   );
// }

// export default App;

// App.js
// import React, { useState } from 'react';
// import LoginForm from './components/LoginForm';
// import Dashboard from './components/Dashboard';
// import UserList from './components/UserList';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showUserList, setShowUserList] = useState(false);

//   const handleLogin = (username, password) => {
//     // Perform login logic (e.g., API call) here
//     // For demonstration purposes, let's consider a simple check
//     if (username === 'greendzine' && password === 'green@123') {
//       setIsLoggedIn(true);
//     } else {
//       alert('Invalid username or password.');
//     }
//   };

//   const handleEmployeeIconClick = () => {
//     setShowUserList(true);
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           <Dashboard onEmployeeIconClick={handleEmployeeIconClick} />
//           {showUserList && <UserList />}
//         </div>
//       ) : (
//         <LoginForm onLogin={handleLogin} />
//       )}
//     </div>
//   );
// }

// export default App;





import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import UserList from './components/UserList';
import './App.css'; // Import your global styles

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserList, setShowUserList] = useState(false);

  const handleLogin = (username, password) => {
    // Perform login logic (e.g., API call) here
    // For demonstration purposes, let's consider a simple check
    if (username === 'greendzine' && password === 'green@123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password.');
    }
  };

  const handleUserIconClick = () => {
    setShowUserList(true);
  };

  const handleReturnToDashboard = () => {
    setShowUserList(false);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <Dashboard
          onEmployeeIconClick={handleUserIconClick}
          showUserList={showUserList}
        />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
      {showUserList && (
        <UserList onReturnToDashboard={handleReturnToDashboard} />
      )}
    </div>
  );
}

export default App;
