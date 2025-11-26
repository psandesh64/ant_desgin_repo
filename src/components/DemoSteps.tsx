import { Button, Steps } from 'antd';
import type { StepProps } from 'antd';
import React, { useState } from 'react';

interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

const DemoSteps = ({ items, handleClick, handleChange, current}:
    {
        items: StepProps[];
        handleClick: React.MouseEventHandler<HTMLElement> | undefined;
        handleChange: ((value:number) => void) | undefined ;
        current: number;
    }
) => {
    // const [current, setCurrent] = useState(0);

    // const onChange = (value: number) => {
    //     console.log('onChange:', value);
    //     setCurrent(value);
    // };
    console.log(loggingIdentity({length:25}));

    return (
    <div>
      <Steps
        type="navigation"
        current={current}
        onChange={handleChange}
        className="site-navigation-steps"
        items={items}
      />
      <Button onClick={handleClick} >Click Me</Button>      
    </div>
    )
}

export default DemoSteps