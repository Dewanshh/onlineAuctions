

export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };
  
  export const getRoleFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = JSON.parse(atob(token.split('.')[1])); 
      return decoded.role;
    }
    return null;
  };
  
  export const logout = () => {
    localStorage.removeItem('token');
  };
  