import { useState } from "react";

const HookArray = () => {
    const [item, setItem] = useState([]);

    const addItemHandler = () => {
        // setItem => array .....

        const addedItem = {
            id: item.length,
            number: Math.floor(Math.random() * 10)
        }
        const updatedItems = [...item, addedItem]
        setItem(updatedItems)

        // or ...
        // setItem([...item, { id: item.length, number: Math.floor(Math.random() * 10) }]);
    }
    return (
        <div>
            <button onClick={addItemHandler}>add items</button>
            {item.map(item => {
                return <li key={item.key}>{item.number}</li>
            })}
        </div>
    );
}

export default HookArray;
