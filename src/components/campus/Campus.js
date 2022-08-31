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

	return (
		<div className="campus">
			<div className="campuses">
				<h1>
					Campuses <span>({campuses.length})</span>
				</h1>
				{campuses.map((ele) => (
					<div className="campus-container" key={ele.id}>
						<img src={ele.imageUrl} alt="campus's image" />
						<button onClick={() => handleDelete(ele)}> X </button>
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
					</div>
				))}
			</div>

			<div className="campuses-form">
				<FormCampus />
			</div>
		</div>
	);
}
