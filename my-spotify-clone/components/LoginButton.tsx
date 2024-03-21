import React from 'react';

const LogoutButton: React.FC = () => {
  const handleLogout = () => {
    // Add logic to clear user authentication state (logout)
    console.log('Logout button clicked');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
