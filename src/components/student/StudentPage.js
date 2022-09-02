import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { setStudentPage } from '../../store/redux/student/studentPageReducer';
import FormStudentPage from '../form/student/FormStudentPage';
import { setStudentEdit } from '../../store/redux/student/studentPageReducer';
export default function StudentPage() {
	const dispatch = useDispatch();
	const params = useParams();

	React.useEffect(() => {
		dispatch(setStudentPage(params.studentId));
	}, []);

	const student = useSelector((state) => state.studentPage);

	const handleStudentEdit = () => {
		dispatch(setStudentEdit());
	};
	return (
		<div className="student-container-page">
			{student.edit ? (
				<FormStudentPage student={student} />
			) : (
				<>
					<header>
						<img src={student.imageUrl} alt="student's image" />
						<h1>{student.fullName}</h1>
					</header>
					<section>
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
					</section>
				</>
			)}

			<div id="single-edit">
				<button hidden={student.edit} onClick={handleStudentEdit}>
					{student.edit ? 'Update' : 'Edit'}
				</button>
			</div>
		</div>
	);
}
