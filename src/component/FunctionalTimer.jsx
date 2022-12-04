import { useEffect } from "react";
import { useState } from "react";

const FunctionalTimer = () => {
	const [count, setCount] = useState(0)
	useEffect(() => {
		const myTimer = setInterval(() => {
			setCount(count + 1)
			console.log("hiiiiii");
		}, 1000);
		return () => {
			clearInterval(myTimer)
			console.log("CWUM");
		}
	}, [])

	return <div>class interval</div>;
}

export default FunctionalTimer;