import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCampuses } from '../../store/redux/campus/campusReducer';
import { Link } from 'react-router-dom';

import FormCampus from '../form/FormCampus';

export default function Campus() {
	const dispatch = useDispatch();
	const campuses = useSelector((state) => state.campus);

	React.useEffect(() => {
		dispatch(setCampuses());
	}, [dispatch]);

	return (
		<div className="campus">
			<div className="campuses">
				<h1>
					Campuses <span>({campuses.length})</span>
				</h1>
				{campuses.map((ele) => (
					<div className="campus-container" key={ele.id}>
						<Link to={`/campuses/${ele.id}`}>
							<img src={ele.imageUrl} alt="campus's image" />
						</Link>
						<p>
							<strong>{ele.name}</strong>{' '}
							{ele.students ? (
								<span>( {ele.students.length} enrollments )</span>
							) : (
								<span>( 0 enrollments )</span>
							)}
						</p>
						<details>
							<summary>
								details about <strong>{ele.name}</strong>
							</summary>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
							quisquam accusamus libero magni porro, dolores natus nemo corporis
							autem quae eaque enim facere aliquam. Ipsum quae in culpa quisquam
							eveniet?
						</details>
					</div>
				))}
			</div>

			<div className="campuses-form">
				<FormCampus />
			</div>
		</div>
	);
}
