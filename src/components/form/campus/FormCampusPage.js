import React from 'react';
import { updateCampusPage } from '../../../store/redux/campus/campusPageReducer';
import { useSelector, useDispatch } from 'react-redux';

export default function FormCampusPage(props) {
	console.log(props);
	const [campusFormPage, setCampusFormPage] = React.useState({
		name: props.campus.name,
		address: '',
		description: '',
	});

	const dispatch = useDispatch();

	React.useEffect(() => {}, [handleSubmit]);

	const handleChange = (props) => (event) => {
		setCampusFormPage({
			...campusFormPage,
			[props]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(updateCampusPage(campusForm));
		setCampusFormPage({ name: '', address: '' });
	};
	return (
		<form id="form-campus-page" onSubmit={handleSubmit}>
			<label htmlFor="name"> NAME </label>
			<input
				name="name"
				type="text"
				value={campusFormPage.name}
				onChange={handleChange('name')}
				placeholder={'Name'}
			/>
			<label htmlFor="address"> ADDRESS </label>
			<input
				name="address"
				type="text"
				value={campusFormPage.address}
				onChange={handleChange('address')}
				placeholder={'Address'}
			/>
			<label htmlFor="description"> ADDRESS </label>
			<textarea
				name="description"
				type="text"
				value={campusFormPage.description}
				onChange={handleChange('description')}
				placeholder={'description'}
				rows="10"
				cols="100"
			/>
			<button type="submit"> UPDATE </button>
		</form>
	);
}
