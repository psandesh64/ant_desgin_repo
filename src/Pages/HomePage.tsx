import React from 'react';
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
import { Button, Flex, Layout, Menu, Switch, theme } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import { useMyContext } from './../contexts/myContext';
import DemoPage from './../components/DemoPage';

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

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key:'demo-page',
    icon: <CloudOutlined/>,
    label: <Link to = "/demo-page">DemoPage</Link>
  },
]

const HomePage = () => {
    const {setDark} = useMyContext()
    
    const { setPrimaryThemeColor} = useMyContext();

    const onChange = (checked: boolean) => {
        setDark(checked)
    };

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    
  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} >
          <Flex style={{padding: 10}} justify='flex-end' align='center' gap={'middle'}>
            <Button
              type="primary"
              onClick={()=>{
                setPrimaryThemeColor(blue.primary)
            }}>
              Blue Theme
          </Button>
            <Button
              type="primary"
              onClick={()=>{
                setPrimaryThemeColor(green.primary)
            }}>
              Green Theme
            </Button>
            <Switch onChange={onChange} />
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
  )
}

export default HomePage
