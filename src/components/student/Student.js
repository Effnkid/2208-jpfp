import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStudents } from '../../store/redux/student/studentReducer';

export default function Student() {
	const dispatch = useDispatch();
	const student = useSelector((state) => state.student);

	React.useEffect(() => {
		dispatch(setStudents());
	}, [dispatch]);

	return (
		<div className="student">
			<h1>
				Students<span>({student.length})</span>
			</h1>
			{student.map((s) => (
				<div className="student-container" key={s.id}>
					<a href={`/students/${s.id}`}>
						<img src={s.imageUrl} alt="" />
					</a>
					<p>
						<strong>{s.fullName}</strong> <small> attends </small>
						Brooklyn College
					</p>
					<details>
						<summary>details about John</summary>
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
