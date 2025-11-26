import React, { useState } from 'react';
import {
  BarChartOutlined,
  CloudOutlined,
  TeamOutlined,
  UserOutlined,
  // AppstoreOutlined,
  // ShopOutlined,
  // UploadOutlined,
  // VideoCameraOutlined,
} from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import { Layout, Menu, StepProps, theme } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import DemoTable from './components/DemoTable';
import DemoStatistics from './components/DemoStatistics'
import DemoSteps from './components/DemoSteps';
import MyContext from './contexts/myContext';
import DemoPage from './components/DemoPage';
import DemoColorPicker from './components/DemoColorPicker';
import UserForm from './components/UserForm';
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
// const items: MenuProps['items'] = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   AppstoreOutlined,
//   TeamOutlined,
//   ShopOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));
const items = [
  {
    key:'demotable',
    icon: <UserOutlined/>,
    label: <Link to = "/demotable">Demo Table</Link>
  },
    {
    key:'statistics',
    icon: <BarChartOutlined/>,
    label: <Link to = "/statistics">Statistics</Link>
  },
  {
    key:'steps',
    icon: <TeamOutlined/>,
    label: <Link to = "/steps">Statistics</Link>
  },
  {
    key:'demo-page',
    icon: <CloudOutlined/>,
    label: <Link to = "/demo-page">DemoPage</Link>
  },
  {
    key:'color-picker',
    icon: <CloudOutlined/>,
    label: <Link to = "/color-picker">Color Picker</Link>
  },
  {
    key:'user-form',
    icon: <CloudOutlined/>,
    label: <Link to = "/user-form">User Form</Link>
  },
]
const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const itemFor:StepProps[] = [
    {
      status: 'wait',
      title: 'Step 1',
    },
    {
      status: 'process',
      title: 'Step 2',
    },    
  ]
  const [current, setCurrent] = useState(0);

  const handleClick =() =>{
    console.log('button Clicked')
  }
  const handleChange =(value:number) => {
    console.log('change ongoing')
    setCurrent(value)
  }

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
                <Route path="demotable" element={<DemoTable/>} />
                <Route path="statistics" element={<DemoStatistics/>} />
                <Route path="steps" element={<DemoSteps items={itemFor} handleClick={ handleClick } handleChange={handleChange} current={current}/>} />
                <Route path="demo-page" element={<DemoPage/>} />
                <Route path="color-picker" element={<DemoColorPicker/>} />
                <Route path="user-form" element={<UserForm/>} />
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
