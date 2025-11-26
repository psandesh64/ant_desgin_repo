import React from 'react'
import { Avatar, Badge } from 'antd';


const DemoPage:React.FC = () => {

  return (
    <div>
      <Badge count={5}>
          <Avatar shape="square" size="large" />
      </Badge>
    </div>
  )
}

export default DemoPage
