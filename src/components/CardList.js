import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
	const list = robots.map(({ id, name, email }) => {
		if (true) {
			throw new Error("NOOO");
		}
		return <Card id={id} name={name} email={email} key={id} />;
	});
	return <div>{list}</div>;
};

export default CardList;
