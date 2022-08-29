import axios from 'axios';

const SET_CAMPUSES = 'SET_CAMPUS';

const _setCampus = (campuses) => {
	return { type: SET_CAMPUSES, campuses };
};

export const setCampus = () => {
	return async (dispatch) => {
		const { data } = await axios.get('/api/campuses');
		dispatch(_setCampus(data));
	};
};

const initialState = [];

export default (state = initialState, { type, campuses }) => {
	switch (type) {
		case SET_CAMPUSES:
			return campuses;

		default:
			return state;
	}
};
