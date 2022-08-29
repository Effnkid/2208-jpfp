import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setStudentPage } from '../../store/redux/student/studentPageReducer';

export default function StudentPage() {
	const dispatch = useDispatch();
	const params = useParams();

	React.useEffect(() => {
		dispatch(setStudentPage(parseInt(params.studentId)));
	}, [dispatch]);

	const student = useSelector((state) => state.studentPage);
	console.log(student.campus);
	return (
		<h1>hello</h1>
		// <div className="student-container-page">
		// 	<img src={student.imageUrl} alt="" />
		// 	<p>
		// 		<strong>{student.fullName}</strong>
		// 	</p>
		// 	<details>
		// 		<summary>details about {student.firstName} </summary>
		// 		Attends:{`student.campus.name`}
		// 		GPA: {student.gpa}
		// 	</details>
		// </div>
	);
}
