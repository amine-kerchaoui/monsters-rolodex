import React from 'react';
import './Card.Styles.css';

export const Card = (props) => {
	return (
		<div className="card-container">
			{
				<div>
					<img alt="monster" src={`https://robohash.org/${props.monster.id}set=set2&size=180*180`} />
					<h2>{props.monster.name}</h2>
					<p>{props.monster.email}</p>
				</div>
			}
		</div>
	);
};
