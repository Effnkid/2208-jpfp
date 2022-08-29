import axios from 'axios';

const SET_STUDENT_PAGE = 'SET_STUDENT_PAGE';

const _setStudentPage = (student) => {
	return { type: SET_STUDENT_PAGE, student };
};

export const setStudentPage = (id) => {
	return async (dispatch) => {
		const { data } = await axios.get(`/api/students/${id}`);
		dispatch(_setStudentPage(data));
	};
};
const initialState = [];

export default (state = initialState, { type, student }) => {
	switch (type) {
		case SET_STUDENT_PAGE:
			return student;

		default:
			return state;
	}
};
