import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setStudentPage } from '../../store/redux/student/studentPageReducer';
import { Link } from 'react-router-dom';

export default function StudentPage() {
	const dispatch = useDispatch();
	const params = useParams();

	React.useEffect(() => {
		dispatch(setStudentPage(parseInt(params.studentId)));
	}, [dispatch]);

	const student = useSelector((state) => state.studentPage);

	return (
		<div className="student-container-page">
			<img src={student.imageUrl} alt="student's image" />
			<h1>{student.fullName}</h1>

			<p> Details about {student.firstName} </p>
			<p>
				Attends:
				{!student.campus ? (
					' Not Registered '
				) : (
					<Link to={`/campuses/${student.campus.id}`}>
						{student.campus.name}
					</Link>
				)}
			</p>
			<p> GPA : {student.gpa}</p>
			<p> Email : {student.email}</p>
		</div>
	);
}
