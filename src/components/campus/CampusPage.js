import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { setCampusPage } from '../../store/redux/campus/campusPageReducer';
import FormCampusPage from '../form/campus/FormCampusPage';

export default function CampusPage() {
	const dispatch = useDispatch();

	const params = useParams();

	React.useEffect(() => {}, []);
	React.useEffect(() => {
		const unsub = () => dispatch(setCampusPage(parseInt(params.campusId)));
		dispatch(setCampusPage(parseInt(params.campusId)));
		return unsub;
	}, [dispatch]);

	const campus = useSelector((state) => state.campusPage);

	return !campus ? (
		<h1> LOADING... </h1>
	) : (
		<div className="campus-container-page">
			<h1> Details about {campus.name}</h1>

			{!campus ? 'loading' : <FormCampusPage campus={campus} />}

			<p> Enrollees: </p>
			<ul>
				{!campus.students ? (
					<li>`No Student `</li>
				) : (
					campus.students.map((ele) => (
						<Link to={`/students/${ele.id}`} key={ele.id}>
							<li>{ele.fullName}</li>
						</Link>
					))
				)}
			</ul>
		</div>
	);
}
