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

	return student.campus ? (
		<div className="student-container-page">
			<img src={student.imageUrl} alt="" />
			<p>
				<strong>{student.fullName}</strong>
			</p>
			<details>
				<summary>details about {student.firstName} </summary>
				<p>
					Attends:
					{
						<Link to={`/campuses/${student.campus.id}`}>
							{student.campus.name}
						</Link>
					}
				</p>
				<p>GPA: {student.gpa}</p>
				<p>Email:{student.email}</p>
			</details>
		</div>
	) : null;
}
