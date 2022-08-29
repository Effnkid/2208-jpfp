import React from 'react';
import Nav from './components/nav';
import { Routes, Route } from 'react-router-dom';
import Student from './components/student/Student';
import StudentPage from './components/student/StudentPage';
import Campus from './components/campus/Campus';
import CampusPage from './components/campus/CampusPage';

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/students" element={<Student />} />
				<Route path="/students/:studentId" element={<StudentPage />} />
				<Route path="/campuses" element={<Campus />} />
				<Route path="/campuses/:campusId" element={<CampusPage />} />
			</Routes>
		</div>
	);
}

export default App;
