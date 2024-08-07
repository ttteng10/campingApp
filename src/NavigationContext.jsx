import React, {createContext, useContext, useState} from 'react';
const NavigationContext = createContext();

export const useNavigationValue = () => {
  return useContext(NavigationContext);
};

export const NavigationProvider = ({children}) => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [userData, setUserData] = useState();
  const navigate = screen => {
    // 실제 네비게이션 로직을 추가합니다.
  };

  return (
    <NavigationContext.Provider
      value={{loginSuccess, setLoginSuccess, userData, setUserData}}>
      {children}
    </NavigationContext.Provider>
  );
};
