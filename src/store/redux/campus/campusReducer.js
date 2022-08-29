import axios from 'axios';

const SET_CAMPUSES = 'SET_CAMPUSES';
const CREATE_CAMPUSE = 'CREATE_CAMPUSE';

const _setCampuses = (campuses) => {
	return { type: SET_CAMPUSES, campuses };
};

const _createCampus = (campus) => {
	return { type: CREATE_CAMPUSE, campus };
};

export const setCampuses = () => {
	return async (dispatch) => {
		const { data } = await axios.get('/api/campuses');
		dispatch(_setCampuses(data));
	};
};

export const createCampus = (campus) => {
	return async (dispatch) => {
		const { data: created } = await axios.post('/api/campuses', campus);
		dispatch(_createCampus(created));
	};
};

const initialState = [];

export default (state = initialState, { type, campuses, campus }) => {
	switch (type) {
		case SET_CAMPUSES:
			return campuses;
		case CREATE_CAMPUSE:
			return [...state, campus];
		default:
			return state;
	}
};
