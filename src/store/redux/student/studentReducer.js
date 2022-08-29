import axios from 'axios';

const SET_STUDENTS = 'SET_STUDENTS';

const _setStudents = (students) => {
	return { type: SET_STUDENTS, students };
};

export const setStudents = () => {
	return async (dispatch) => {
		const { data } = await axios.get('/api/students');
		dispatch(_setStudents(data));
	};
};

const initialState = [];

export default (state = initialState, { type, students }) => {
	switch (type) {
		case SET_STUDENTS:
			return students;

		default:
			return state;
	}
};
