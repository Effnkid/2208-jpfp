import axios from 'axios';

const SET_STUDENTS = 'SET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';

const _setStudents = (students) => {
	return { type: SET_STUDENTS, students };
};

const _createStudent = (student) => {
	return { type: CREATE_STUDENT, student };
};

export const setStudents = () => {
	return async (dispatch) => {
		const { data } = await axios.get('/api/students');
		dispatch(_setStudents(data));
	};
};

export const createStudent = (student) => {
	return async (dispatch) => {
		const { data: created } = await axios.post('/api/students', student);
		dispatch(_createStudent(created));
	};
};

const initialState = [];

export default (state = initialState, { type, students, student }) => {
	switch (type) {
		case SET_STUDENTS:
			return students;
		case CREATE_STUDENT:
			return [...state, student];
		default:
			return state;
	}
};
