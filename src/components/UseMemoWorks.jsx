import React, {useMemo, useState} from 'react'

const UseMemoWorks = () => {
    const [count, setCount] = useState(0);

    // useMemo will only recompute the memoized value when one of the dependencies has changed.
    const expensiveCalculation = useMemo(() => {
      console.log('Calculating...');
      let result = 0;
      for (let i = 0; i < count * 1000100; i++) {
        result += i;
      }
      return result;
    }, [count]);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <p>Result of expensive calculation: {expensiveCalculation}</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
}

export default UseMemoWorks