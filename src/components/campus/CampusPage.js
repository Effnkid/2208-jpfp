import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCampusPage } from '../../store/redux/campus/campusPageReducer';
import { Link } from 'react-router-dom';

export default function CampusPage() {
	const dispatch = useDispatch();

	const params = useParams();

	React.useEffect(() => {
		dispatch(setCampusPage(parseInt(params.campusId)));
	}, [dispatch]);

	const campus = useSelector((state) => state.campusPage);
	if (!campus.students) {
		return <h1>LOADING</h1>;
	}
	return (
		<div className="campus-container-page">
			<p>
				<strong>{campus.name}</strong> <span>(# enrollments)</span>
			</p>
			<details>
				<summary>details about {campus.name}</summary>
				<p>Address:{campus.address}</p>
				<p>Description:{campus.description}</p>
				<ul>
					{campus.students.map((ele) => (
						<Link to={`/students/${ele.id}`}>
							<li key={ele.id}>{ele.fullName}</li>
						</Link>
					))}
				</ul>
			</details>
		</div>
	);
}
