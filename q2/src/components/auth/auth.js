// auth.js
export const isAuthenticated = () => {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken; // Returns true if the access token exists, otherwise false
  };
  