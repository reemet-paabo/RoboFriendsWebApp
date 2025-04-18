import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./app.css";

function App() {
	const [robots, setRobots] = useState([]);
	const [count, setCount] = useState(0);
	const [searchFields, setSearchFields] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setRobots(users));
	}, [count]);

	const onSearchChange = (event) => {
		setSearchFields(event.target.value);
	};
	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLocaleLowerCase().includes(searchFields.toLocaleLowerCase());
	});
	return !robots.length ? (
		<h3 className='f2'>Loading...</h3>
	) : (
		<div className='tc'>
			<Title />
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Click Me!
			</button>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filteredRobots}></CardList>
				</ErrorBoundry>
			</Scroll>
		</div>
	);
}
export default App;
