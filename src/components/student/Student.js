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
			{student.map((ele) => (
				<div className="student-container" key={ele.id}>
					<Link to={`/students/${eleid}`}>
						<img src={ele.imageUrl} alt="" />
					</Link>
					<p>
						<strong>{ele.fullName}</strong> <small> attends </small>
						{ele.campus.name}
					</p>
					<details>
						<summary>details about {ele.firstName}</summary>
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
