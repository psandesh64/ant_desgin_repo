import React, { useState } from 'react';
import { blue } from '@ant-design/colors';
import { ConfigProvider, theme } from 'antd';
import MyContext, { MyContextType } from './contexts/myContext';
import { myToken } from './assets/token';
import HomePage from './Pages/HomePage';

const App: React.FC = () => {

  const [primaryThemeColor,setPrimaryThemeColor] = useState<string | undefined>(blue.primary)
  const [dark,setDark] = useState(false)

  const contextValue: MyContextType ={
    primaryThemeColor,
    setPrimaryThemeColor,
    dark,
    setDark
  }
  const obj = {
    primaryThemeColor: primaryThemeColor,
    dark: dark
  }

  return (
    <MyContext.Provider
      value={contextValue}
    >
      <ConfigProvider
        theme={{
          algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm ,
          token: myToken(obj),
      }}>
        <HomePage/>

      </ConfigProvider>
    </MyContext.Provider>
  );
};

export default App;
