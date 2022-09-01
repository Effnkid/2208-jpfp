import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
	setCampusPage,
	unregisterStudent,
	setCampusEdit,
} from '../../store/redux/campus/campusPageReducer';
import FormCampusPage from '../form/campus/FormCampusPage';

export default function CampusPage() {
	const dispatch = useDispatch();
	const params = useParams();

	React.useEffect(() => {
		dispatch(setCampusPage(params.campusId));
	}, [dispatch]);

	const campus = useSelector((state) => state.campusPage);

	const handleUnregister = (studentId, campusId) => {
		dispatch(unregisterStudent(studentId, campusId));
	};

	const handleCampusEdit = () => {
		dispatch(setCampusEdit());
	};

	return (
		<div className="campus-container-page">
			{campus.edit ? (
				<FormCampusPage campus={campus} />
			) : (
				<>
					<header>
						<img src={campus.imageUrl} />
						<h1> {campus.name}</h1>
					</header>
					<h3> Details about {campus.name}</h3>

					<p> Enrollees: </p>
					<ul>
						{campus.students ? (
							campus.students.map((ele) => (
								<li key={ele.id}>
									<Link to={`/students/${ele.id}`}>
										<span id="list-campus-enrollees">{ele.fullName}</span>
									</Link>
									<span>
										<button
											onClick={() => handleUnregister(ele.id, params.campusId)}
										>
											Unregister
										</button>
									</span>
								</li>
							))
						) : (
							<li> `No Students` </li>
						)}
					</ul>
				</>
			)}
			<div id="single-edit">
				<button hidden={campus.edit} onClick={handleCampusEdit}>
					{campus.edit ? 'Update' : 'Edit'}
				</button>
			</div>
		</div>
	);
}
