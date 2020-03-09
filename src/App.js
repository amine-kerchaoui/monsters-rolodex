import React, { Component } from 'react';
import { CardList } from './Components/Card-List/Card-List.Component';
import { SearchBox } from './Components/Search-Box/Search-Box.Component';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}
	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filtredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox placeholder="search monsters" handleChange={this.handleChange} />

				<CardList monsters={filtredMonsters} />
			</div>
		);
	}
}

export default App;
