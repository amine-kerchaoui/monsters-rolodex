import React from 'react';
import { Card } from '../Card/Card.Component';

import './Card-List.Styles.css';

export const CardList = (props) => {
	return (
		<div className="card-list">{props.monsters.map((monster) => <Card key={monster.id} monster={monster} />)}</div>
	);
};
