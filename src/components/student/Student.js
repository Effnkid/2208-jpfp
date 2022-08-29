import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	setStudents,
	deleteStudent,
} from '../../store/redux/student/studentReducer';
import { Link } from 'react-router-dom';

import FormStudent from '../form/FormStudent';

export default function Student() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(setStudents());
	}, [dispatch]);

	const handleDelete = (student) => {
		dispatch(deleteStudent(student));
	};

	const student = useSelector((state) => state.student);
	return (
		<div className="student">
			<div className="students">
				<h1>
					Students<span>({student.length})</span>
				</h1>
				{student.map((ele) => (
					<div className="student-container" key={ele.id}>
						<Link to={`/students/${ele.id}`}>
							<img src={ele.imageUrl} alt="" />
						</Link>
						<button onClick={() => handleDelete(ele)}> X </button>
						<p>
							<strong>{ele.fullName}</strong> <small> attends </small>
							{ele.campus ? ele.campus.name : 'undecided'}
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
			<div className="students-form">
				<FormStudent />
			</div>
		</div>
	);
}
