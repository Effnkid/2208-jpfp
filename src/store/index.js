import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loggingMiddleware from 'redux-logger';

import studentReducer from './redux/student/studentReducer';
import studentPageReducer from './redux/student/studentPageReducer';

import campusReducer from './redux/campus/campusReducer';
import campusPageReducer from './redux/campus/campusPageReducer';

const rootReducer = combineReducers({
	student: studentReducer,
	studentPage: studentPageReducer,
	campus: campusReducer,
	campusPage: campusPageReducer,
});

function configureStore() {
	return createStore(rootReducer, applyMiddleware(thunk, loggingMiddleware));
}

export default configureStore;
