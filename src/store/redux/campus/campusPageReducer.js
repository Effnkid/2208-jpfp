import axios from 'axios';

const SET_CAMPUS_PAGE = 'SET_CAMPUS_PAGE';

const _setCampusPage = (campus) => {
	return { type: SET_CAMPUS_PAGE, campus };
};
export const setCampusPage = (id) => {
	return async (dispatch) => {
		const { data } = await axios.get(`/api/campuses/${id}`);
		dispatch(_setCampusPage(data));
	};
};

const initialState = [];

export default (state = initialState, { type, campus }) => {
	switch (type) {
		case SET_CAMPUS_PAGE:
			return campus;

		default:
			return state;
	}
};
