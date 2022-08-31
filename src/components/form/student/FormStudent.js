import React from 'react';
import { createStudent } from '../../../store/redux/student/studentReducer';
import { useDispatch } from 'react-redux';

export default function FormStudent() {
	const [studentForm, setStudentForm] = React.useState({
		firstName: '',
		lastName: '',
		email: '',
	});
	const dispatch = useDispatch();

	React.useEffect(() => {}, [handleSubmit]);

	const handleChange = (props) => (event) => {
		setStudentForm({
			...studentForm,
			[props]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(createStudent(studentForm));
		setStudentForm({ firstName: '', lastName: '', email: '' });
	};
	return (
		<form id="form-student" onSubmit={handleSubmit}>
			<strong>
				<i>ADD NEW STUDENT</i>
			</strong>
			<input
				type="text"
				value={studentForm.firstName}
				onChange={handleChange('firstName')}
				placeholder={'firstName'}
			/>

			<input
				type="text"
				value={studentForm.lastName}
				onChange={handleChange('lastName')}
				placeholder={'lastName'}
			/>
			<input
				type="text"
				value={studentForm.email}
				onChange={handleChange('email')}
				placeholder={'email'}
			/>
			<button type="submit"> Create </button>
		</form>
	);
}
