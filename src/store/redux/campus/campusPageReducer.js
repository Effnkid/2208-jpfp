import axios from 'axios';

const SET_CAMPUS_PAGE = 'SET_CAMPUS_PAGE';
const SET_CAMPUS_EDIT = 'SET_CAMPUS_EDIT';

const _setCampusPage = (campus) => {
	return { type: SET_CAMPUS_PAGE, campus };
};
const _setCampusEdit = () => {
	return { type: SET_CAMPUS_EDIT };
};

export const setCampusPage = (id) => {
	return async (dispatch) => {
		const { data } = await axios.get(`/api/campuses/${id}`);
		dispatch(_setCampusPage(data));
	};
};

export const updateCampusPage = (id, campus) => {
	return async (dispatch) => {
		const { data: updated } = await axios.put(`/api/campuses/${id}`, campus);
		dispatch(_setCampusPage(updated));
	};
};

export const unregisterStudent = (studentId, campusId) => {
	return async (dispatch) => {
		await axios.put(`/api/students/${studentId}`);
		await dispatch(setCampusPage(campusId));
	};
};
export const setCampusEdit = () => {
	return (dispatch) => dispatch(_setCampusEdit());
};
const initialState = {
	edit: false,
};

export default (state = initialState, { type, campus }) => {
	switch (type) {
		case SET_CAMPUS_PAGE:
			return { ...state, ...campus };
		case SET_CAMPUS_EDIT:
			return { ...state, edit: !state.edit };
		default:
			return state;
	}
};
