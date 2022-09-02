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
	const student = useSelector((state) => state.student);

	React.useEffect(() => {
		dispatch(setStudents());
	}, [dispatch]);

	const handleDelete = (student) => {
		dispatch(deleteStudent(student));
	};

	return !student ? (
		<h1> LOADING... </h1>
	) : (
		<div className="student">
			<div className="students">
				<header>
					<h1>
						<u>
							Students<span>({student.length})</span>
						</u>
					</h1>
				</header>

				{student.map((ele) => (
					<div className="student-container" key={ele.id}>
						<div className="student-container-image">
							<img src={ele.imageUrl} alt="student's image" />
						</div>
						<div className="student-container-info">
							<p>
								<strong>{ele.firstName}</strong> <small> attends </small>
								{ele.campus ? ele.campus.name : 'undecided'}
							</p>
							<Link to={`/students/${ele.id}`}>
								<p>
									<small>Details about {ele.firstName}</small>
								</p>
							</Link>
							<button onClick={() => handleDelete(ele)}> Remove Student</button>
						</div>
					</div>
				))}
			</div>
			<div className="students-form">
				<FormStudent />
			</div>
		</div>
	);
}
