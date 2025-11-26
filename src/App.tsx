import React, { useState } from 'react';
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
import { Layout, Menu, theme } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import MyContext from './contexts/myContext';
import DemoPage from './components/DemoPage';

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
  const [current,setCurrent] = useState(1)

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <MyContext.Provider
              value={{
                current,
              }}
            >
              <Routes>
                <Route path="demo-page" element={<DemoPage/>} />
              </Routes>
            </MyContext.Provider>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
