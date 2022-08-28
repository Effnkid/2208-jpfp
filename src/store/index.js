import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import studentReducer from './redux/studentReducer';
import campusReducer from './redux/campusReducer';

const rootReducer = combineReducers({
	student: studentReducer,
	campus: campusReducer,
});

function configureStore() {
	return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;
