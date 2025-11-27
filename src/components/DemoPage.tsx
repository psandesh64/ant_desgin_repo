import React from 'react';
import { blue } from '@ant-design/colors';
import { Button, Flex, Input, Space } from 'antd';

const style1: React.CSSProperties = {
    backgroundColor: blue.primary,
    height: 54,
    width: '50%',
};

const DemoPage:React.FC = () => {

  return (
    <div>
      <Flex vertical={false} justify='center' align='center'>

        <Flex style={style1} justify='center' align='center' >
          Ferro
        </Flex>

        <Flex style={{...style1, backgroundColor:blue[2]}} justify='center' align='center'>
          <span style={{font:'Roboto'}}>Stereo</span>
        </Flex>

      </Flex>
      <Space>
        <Input placeholder="Please Input" />
        <Button type="primary">Submit</Button>
      </Space>

    </div>
  )
}

export default DemoPage
