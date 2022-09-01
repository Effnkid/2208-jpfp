import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Nav() {
	const { campus, student } = useSelector((state) => state);
	return (
		<nav>
			<Link to={'/'}> Home </Link>
			<Link to={'/students'}> Students({student.length}) </Link>
			<Link to={'/campuses'}> Campus({campus.length}) </Link>
		</nav>
	);
}
