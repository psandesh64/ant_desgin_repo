import React from 'react';

// React.memo ensures this component only re-renders if its props change.
// The useCallback in the parent ensures the 'handleClick' prop doesn't 
// change unless necessary, thus optimizing performance.
interface ChildComponentPropType {
    handleClick: () => void;
}

const ChildComponent = React.memo(({ handleClick }:ChildComponentPropType) => {
  console.log('ChildComponent rendered'); // Log to see when re-renders occur

  return (
    <div>
      <h4>Child Component</h4>
      <button onClick={handleClick}>
        Increment Count (via Parent function)
      </button>
    </div>
  );
});

export default ChildComponent;
