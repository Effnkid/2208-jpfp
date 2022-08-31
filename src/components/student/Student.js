import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	setStudents,
	deleteStudent,
} from '../../store/redux/student/studentReducer';
import { Link } from 'react-router-dom';

import FormStudent from '../form/student/FormStudent';

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
						<img src={ele.imageUrl} alt="student's image" />
						<button onClick={() => handleDelete(ele)}> X </button>
						<p>
							<strong>{ele.firstName}</strong> <small> attends </small>
							{ele.campus ? ele.campus.name : 'undecided'}
						</p>
						<Link to={`/students/${ele.id}`}>
							<p>
								<small>Details about {ele.firstName}</small>
							</p>
						</Link>
					</div>
				))}
			</div>
			<div className="students-form">
				<FormStudent />
			</div>
		</div>
	);
}
