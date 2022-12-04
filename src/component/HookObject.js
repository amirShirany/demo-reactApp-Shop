import { useState } from "react";

const HookObject = () => {
    const [user, setUser] = useState({ firstName: "", lastName: "" })

    const firstNameHandler = (e) => {
        setUser({
            ...user, firstName: e.target.value
        });
    }
    const lastNameHandler = (e) => {
        setUser({ ...user, lastName: e.target.value });
    }
    return (
        <form>
            <h2>my name is : {user.firstName}</h2>
            <input type="text" value={user.firstName} onChange={firstNameHandler} />
            <h2>my lastName is : {user.lastName}</h2>
            <input type="text" value={user.lastName} onChange={lastNameHandler} />
            <div>{JSON.stringify(user)}</div>
        </form>
    );
}

export default HookObject;