import { useState } from "react";

const HookCounter = () => {
    const [count, setCount] = useState(0);

    const addOneHandler = () => {
        setCount(pervCount => pervCount + 1);
    }
    const addTwoHandler = () => {
        setCount(pervCount => pervCount + 2);
    }
    const addFiveHandler = () => {
        for (let i = 0; i < 5; i++) {
            setCount(pervCount => pervCount + 1);
        }
        // console.log(count);
        // setCount(count + 5);
    }


    // update state based on Prrevious state ==> callback function
    return (
        <div>
            <h1> counter - {count} </h1>
            <button onClick={addOneHandler}>Add One</button>
            <button onClick={addTwoHandler}>Add Two</button>
            <button onClick={addFiveHandler}>Add Five</button>
        </div>
    );
}

export default HookCounter;