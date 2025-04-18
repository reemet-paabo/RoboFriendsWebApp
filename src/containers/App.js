import React, { Component } from "react";
import Title from "../components/Title";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./app.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchFields: "",
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchFields: event.target.value });
	};

	render() {
		const { robots, searchFields } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLocaleLowerCase().includes(searchFields.toLocaleLowerCase());
		});
		return !robots.length ? (
			<h3 className='f2'>Loading...</h3>
		) : (
			<div className='tc'>
				<Title />
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}></CardList>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}
export default App;
