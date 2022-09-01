import axios from 'axios';

const SET_STUDENT_PAGE = 'SET_STUDENT_PAGE';
const SET_STUDENT_EDIT = 'SET_STUDENT_EDIT';

const _setStudentPage = (student) => {
	return { type: SET_STUDENT_PAGE, student };
};
const _setStudentEdit = () => {
	return { type: SET_STUDENT_EDIT };
};

export const setStudentPage = (id) => {
	return async (dispatch) => {
		const { data } = await axios.get(`/api/students/${id}`);
		dispatch(_setStudentPage(data));
	};
};

export const setStudentEdit = () => {
	return (dispatch) => dispatch(_setStudentEdit());
};
export const updateStudentPage = (id, student) => {
	return async (dispatch) => {
		const { data: updated } = await axios.put(`/api/students/${id}`, student);
		dispatch(_setStudentPage(updated));
	};
};

const initialState = {
	edit: false,
};
export default (state = initialState, { type, student }) => {
	switch (type) {
		case SET_STUDENT_PAGE:
			return { ...state, ...student };
		case SET_STUDENT_EDIT:
			return { ...state, edit: !state.edit };
		default:
			return state;
	}
};
