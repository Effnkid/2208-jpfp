import React from 'react';
import { Link } from 'react-router-dom';
export default function Nav() {
	return (
		<nav>
			<Link to={'/students'}>Students</Link>
			<Link to={'/campuses'}>Campus</Link>
		</nav>
	);
}
