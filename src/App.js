import React from 'react';
import Nav from './components/nav';
import { Routes, Route } from 'react-router-dom';
import Student from './components/student/Student';
import Campus from './components/campus/Campus';

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/students" element={<Student />}></Route>
				<Route path="/campus" element={<Campus />}></Route>
			</Routes>
		</div>
	);
}

export default App;
