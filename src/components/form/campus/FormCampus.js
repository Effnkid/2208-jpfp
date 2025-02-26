import React from 'react';
import { createCampus } from '../../../store/redux/campus/campusReducer';
import { useDispatch } from 'react-redux';

export default function FormCampus() {
	const [campusForm, setCampusForm] = React.useState({ name: '', address: '' });
	const dispatch = useDispatch();

	React.useEffect(() => {}, [handleSubmit]);

	const handleChange = (props) => (event) => {
		setCampusForm({
			...campusForm,
			[props]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(createCampus(campusForm));
		setCampusForm({ name: '', address: '' });
	};
	return (
		<form id="form-campus" onSubmit={handleSubmit}>
			<strong>
				<i>ADD NEW CAMPUS</i>
			</strong>
			<input
				type="text"
				value={campusForm.name}
				onChange={handleChange('name')}
				placeholder={'Name'}
				required
				minLength="7"
			/>

			<input
				type="text"
				value={campusForm.address}
				onChange={handleChange('address')}
				placeholder={'Address'}
				required
				minLength="7"
			/>
			<button type="submit"> Create </button>
		</form>
	);
}
