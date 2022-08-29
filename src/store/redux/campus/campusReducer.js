import axios from 'axios';

const SET_CAMPUSES = 'SET_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

const _setCampuses = (campuses) => {
	return { type: SET_CAMPUSES, campuses };
};

const _createCampus = (campus) => {
	return { type: CREATE_CAMPUS, campus };
};

const _deleteCampus = (campus) => {
	return { type: DELETE_CAMPUS, campus };
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

export const deleteCampus = (campus) => {
	return async (dispatch) => {
		const { data: deleted } = await axios.delete('/api/campuses', {
			data: { campus },
		});
		dispatch(_deleteCampus(deleted));
	};
};

const initialState = [];

export default (state = initialState, { type, campuses, campus }) => {
	switch (type) {
		case SET_CAMPUSES:
			return campuses;
		case CREATE_CAMPUS:
			return [...state, campus];
		case DELETE_CAMPUS:
			return state.filter((ele) => ele.id !== campus.id);
		default:
			return state;
	}
};
