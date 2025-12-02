import React from 'react'
import { Avatar, Badge, Button, Space } from 'antd';


const DemoPage:React.FC = () => {

  return (
    <div>
      <Badge count={5}>
        <Space className='container'>
          <Avatar shape="square" size="large" />
          <Button type='primary' className='my-button'>Click</Button>
          <button className='my-button'>Click</button>
        </Space>
      </Badge>
    </div>
  )
}

export default DemoPage
