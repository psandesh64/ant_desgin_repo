import React, { useState } from 'react';
import { blue, green } from '@ant-design/colors';
import {
  CloudOutlined,
  // BarChartOutlined,
  // TeamOutlined,
  // UserOutlined,
  // AppstoreOutlined,
  // ShopOutlined,
  // UploadOutlined,
  // VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Flex, Layout, Menu, Switch, theme } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import MyContext, { MyContextType } from './contexts/myContext';
import DemoPage from './components/DemoPage';
import { myToken } from './assets/token';

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const items = [
  {
    key:'demo-page',
    icon: <CloudOutlined/>,
    label: <Link to = "/demo-page">DemoPage</Link>
  },
]
const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // eslint-disable-next-line
  const [primaryThemeColor,setPrimaryThemeColor] = useState<string | undefined>('#00b96b')
  // const [algorithm,setAlgorithm] = useState<any>(theme.defaultAlgorithm)
  const contextValue: MyContextType ={
    primaryThemeColor,
    setPrimaryThemeColor,
  }
  const obj = {
    primaryThemeColor: primaryThemeColor,
    // algorithm: 'theme.darkAlgorithm',
    // algorithm: algorithm,
  }

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    // console.log(algorithm)
    // if (checked)
    // setAlgorithm(theme.defaultAlgorithm)
    // else setAlgorithm(theme.darkAlgorithm)
  };

  return (
    <MyContext.Provider
      value={contextValue}
    >
    <ConfigProvider
        theme={{
          token: myToken(obj),
          components: {
            Button: {
              // colorPrimary: '#00b96b',
              algorithm: true, // Enable algorithm
            },
            Menu: {
              // colorPrimary: '#00b96b',
              algorithm: true, // Enable algorithm
            },
      }
      }}>
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} >
          <Flex style={{padding: 10}} justify='flex-end' align='center' gap={'middle'}>
            <Button onClick={()=>{
              setPrimaryThemeColor(blue.primary)
              }}>
                Blue Theme
            </Button>
            <Button onClick={()=>{
              setPrimaryThemeColor(green.primary)
              }}>
                Green Theme
            </Button>
            <Switch defaultChecked onChange={onChange} />
          </Flex>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="demo-page" element={<DemoPage/>} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </ConfigProvider>
            </MyContext.Provider>
  );
};

export default App;
