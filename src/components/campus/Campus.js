import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	setCampuses,
	deleteCampus,
} from '../../store/redux/campus/campusReducer';
import { Link } from 'react-router-dom';

import FormCampus from '../form/campus/FormCampus';

export default function Campus() {
	const dispatch = useDispatch();
	const campuses = useSelector((state) => state.campus);

	React.useEffect(() => {
		dispatch(setCampuses());
	}, [dispatch]);

	const handleDelete = (campus) => {
		dispatch(deleteCampus(campus));
	};

	return !campuses ? (
		<h1>LOADING... </h1>
	) : (
		<div className="campus">
			<div className="campuses">
				<h1>
					Campuses <span>({campuses.length})</span>
				</h1>
				{campuses.map((ele) => (
					<div className="campus-container" key={ele.id}>
						<div className="student-container-image">
							<img src={ele.imageUrl} alt="campus's image" />
						</div>
						<div className="student-container-info">
							<p>
								<strong> {ele.name} </strong>
								{ele.students ? (
									<span>( {ele.students.length} enrollments )</span>
								) : (
									<span>( 0 enrollments )</span>
								)}
							</p>
							<Link to={`/campuses/${ele.id}`}>
								<p>
									<small>Details about {ele.name}</small>
								</p>
							</Link>
							<button onClick={() => handleDelete(ele)}> Remove Campus </button>
						</div>
					</div>
				))}
			</div>

			<div className="campuses-form">
				<FormCampus />
			</div>
		</div>
	);
}
