import React, { useEffect, useCallback } from 'react'
import { useState } from 'react';

const funccount = new Set();

function ExplainUseCallback(props) {
  

    const [counter, setCounter] = useState(0);
    const [random, setRandom] = useState(0);


    const increment = (e) => {
        e.preventDefault()
        setCounter(counter + 1)
    }

    const decrement = (e) => {
        e.preventDefault()
        setCounter(counter - 1)
    }

    const incrementCallBack = useCallback((e) => {
        e.preventDefault()
        setCounter(counter + 1)
    },[counter])

    const decrementCallBack = useCallback((e) => {
        e.preventDefault()
        setCounter(counter - 1)
    },[counter])

    const decrementCallBackWithNoDependency = useCallback((e) => {
        e.preventDefault()
        setCounter(counter - 1)
    },[])

    const updateRandomValue = useCallback((e) => {
        e.preventDefault()
        setRandom(random + 1)
    },[random])

    funccount.add(increment)
    funccount.add(decrement)
    funccount.add(incrementCallBack)
    funccount.add(decrementCallBack)
    funccount.add(decrementCallBackWithNoDependency)

    console.log(funccount.size)
  return (
    <div className='explain-use-callback'>
        <br />
        Counter : {counter}
        <br />
        Updating Random value : {random}
        <br />
      <button onClick={increment}> increment </button>
      <button onClick={decrement}> decrement </button>
      <br/> <br/> <br/>
      <button onClick={incrementCallBack}> increment with Callback </button>
      <button onClick={decrementCallBack}> decrement with Callback </button>
      <br/> <br/> <br/>
      <button onClick={decrementCallBackWithNoDependency}> decrement with Callback  and No Dependency</button>
      <br/> <br/> <br/>
      <button onClick={updateRandomValue}> Update Some Other Random Value In Page</button>

    </div>
  )
}


// Why callback
// Why dependency for callback
// Diff between callback with dependency and inline functions when both are newly created everytime
// Why callback when dependency is called again with same dependency it creates a new function.
// Why not all always no dependency


// https://dmitripavlutin.com/dont-overuse-react-usecallback/
// https://www.geeksforgeeks.org/react-js-usecallback-hook/

export default ExplainUseCallback