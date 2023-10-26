import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const getUser = (userData) => {
    setUser(userData);
  };
  const updateUserField = (field) => {
    setUser(prevUser => {
      if (prevUser) {
        return { ...prevUser, field };
      }
      return null;
    });
  };

  return (
    <UserContext.Provider value={{ user, getUser, updateUserField }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
