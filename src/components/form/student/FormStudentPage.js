import React from 'react';
import { useDispatch } from 'react-redux';
import {
	updateStudentPage,
	setStudentEdit,
} from '../../../store/redux/student/studentPageReducer';

export default function FormStudentPage(props) {
	const [studentFormPage, setStudentFormPage] = React.useState({});
	const dispatch = useDispatch();
	React.useEffect(() => {
		setStudentFormPage({
			firstName: props.student.firstName,
			lastName: props.student.lastName,
			email: props.student.email,
		});
	}, [props]);

	const handleChange = (prop) => (event) => {
		setStudentFormPage({
			...studentFormPage,
			[prop]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(updateStudentPage(props.student.id, studentFormPage));
		dispatch(setStudentEdit());
	};
	return (
		<form id="form-student-page" onSubmit={handleSubmit}>
			<textarea
				type="text"
				value={studentFormPage.firstName}
				onChange={handleChange('firstName')}
				placeholder={'firstName'}
			/>

			<textarea
				type="text"
				value={studentFormPage.lastName}
				onChange={handleChange('lastName')}
				placeholder={'lastName'}
			/>
			<textarea
				type="text"
				value={studentFormPage.email}
				onChange={handleChange('email')}
				placeholder={'email'}
			/>
			<button type="submit"> Update </button>
		</form>
	);
}
