import axios from 'axios';

const SET_CAMPUS_PAGE = 'SET_CAMPUS_PAGE';
const UPDATE_CAMPUS_PAGE = 'UPDATE_CAMPUS_PAGE';

const _setCampusPage = (campus) => {
	return { type: SET_CAMPUS_PAGE, campus };
};

const _updateCampusPage = (campus) => {
	return { type: UPDATE_CAMPUS_PAGE, campus };
};
export const setCampusPage = (id) => {
	return async (dispatch) => {
		const { data } = await axios.get(`/api/campuses/${id}`);
		dispatch(_setCampusPage(data));
	};
};

export const updateCampusPage = (id) => {
	return async (dispatch) => {
		const { data: updated } = await axios.put(`/api/campuses/${id}`);
		dispatch(_updateCampusPage(updated));
	};
};
const initialState = {};

export default (state = initialState, { type, campus }) => {
	switch (type) {
		case SET_CAMPUS_PAGE:
			return campus;
		// case UPDATE_CAMPUS_PAGE:
		// 	return {...state, }
		default:
			return state;
	}
};
