import React, { useState, useCallback } from 'react'
import { Avatar, Badge } from 'antd';
import ChildComponent from './smallComponent/ChildComponent';


const DemoPage:React.FC = () => {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState< string[] >(['Task 1']);

  // This function is memoized (cached) and only changes when 'count' changes.
  // We use useCallback because the function is passed to a child component, 
  // preventing the child from re-rendering every time ParentComponent re-renders.
  const increment = () => {
    setCount(c => c + 1);
  }; // Empty dependency array means the function is created only once on initial render.
  
  // Example for a function that needs dependencies (adding a task)
  const addTask = useCallback(() => {
    setTasks(t => [...t, `Task ${t.length + 1}`]);
  }, [tasks]); // 'tasks' is a dependency, so the function updates when tasks changes.


  return (
    <div>
        <Badge count={5}>
            <Avatar shape="square" size="large" />
        </Badge>
        <div>
          <h2>Parent Component</h2>
          <p>Count: {count}</p>
          {/* Passing the memoized 'increment' function to the child */}
          <ChildComponent handleClick={increment} />
          <hr />
          <h3>Tasks List</h3>
          <button onClick={addTask}>Add Task</button>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        </div>
  )
}

export default DemoPage
