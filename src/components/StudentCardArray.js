import React from 'react';
import StudentCard from '../components/StudentCard';


const StudentCardArray = ({Students}) => {
	return (
		<div>
		{
		Students.map((user, i) => {
			return <StudentCard
				key = {i}
				name = {Students[i].name}
				id = {Students[i].id}
				online = {Students[i].online}
				email = {Students[i].email}
			/>
		})
			}
		</div>
	);
}












export default StudentCardArray;