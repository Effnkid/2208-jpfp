import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCampus } from '../../store/redux/campus/campusReducer';

export default function Campus() {
	const dispatch = useDispatch();
	const campuses = useSelector((state) => state.campus);

	React.useEffect(() => {
		dispatch(setCampus());
	}, [dispatch]);

	return (
		<div className="campus">
			<h1>
				Campuses <span>({campuses.length})</span>
			</h1>
			{campuses.map((c) => (
				<div className="campus-container" key={c.id}>
					<a href={`/campuses/${c.id}`}>
						<img src={c.imageUrl} alt="campus's image" />
					</a>
					<p>
						<strong>{c.name}</strong> <span>(# enrollments)</span>
					</p>
					<details>
						<summary>
							details about <strong>{c.name}</strong>
						</summary>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
						quisquam accusamus libero magni porro, dolores natus nemo corporis
						autem quae eaque enim facere aliquam. Ipsum quae in culpa quisquam
						eveniet?
					</details>
				</div>
			))}
		</div>
	);
}
