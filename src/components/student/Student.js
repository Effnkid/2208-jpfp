import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStudents } from '../../store/redux/student/studentReducer';
import { Link } from 'react-router-dom';

export default function Student() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(setStudents());
	}, [dispatch]);

	const student = useSelector((state) => state.student);
	return (
		<div className="student">
			<h1>
				Students<span>({student.length})</span>
			</h1>
			{student.map((s) => (
				<div className="student-container" key={s.id}>
					<Link to={`/students/${s.id}`}>
						<img src={s.imageUrl} alt="" />
					</Link>
					<p>
						<strong>{s.fullName}</strong> <small> attends </small>
						{s.campus.name}
					</p>
					<details>
						<summary>details about {s.firstName}</summary>
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
