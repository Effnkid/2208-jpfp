import React from 'react';
import {
	updateCampusPage,
	setCampusEdit,
} from '../../../store/redux/campus/campusPageReducer';
import { useDispatch } from 'react-redux';

export default function FormCampusPage(props) {
	const dispatch = useDispatch();
	const [campusFormPage, setCampusFormPage] = React.useState({});

	React.useEffect(() => {
		setCampusFormPage({
			name: props.campus.name,
			address: props.campus.address,
			description: props.campus.description,
		});
	}, [props]);

	const handleChange = (prop) => (event) => {
		setCampusFormPage({
			...campusFormPage,
			[prop]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(updateCampusPage(props.campus.id, campusFormPage));
		dispatch(setCampusEdit());
	};
	return (
		<form id="form-campus-page" onSubmit={handleSubmit}>
			<label htmlFor="name"> NAME </label>
			<textarea
				name="name"
				type="text"
				value={campusFormPage.name}
				onChange={handleChange('name')}
				placeholder={'Name'}
			/>
			<label htmlFor="address"> ADDRESS </label>
			<textarea
				name="address"
				type="text"
				value={campusFormPage.address}
				onChange={handleChange('address')}
				placeholder={'Address'}
			/>
			<label htmlFor="description"> DESCRIPTION </label>
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
