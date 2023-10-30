import React, {useState, useEffect} from 'react';
import StudentCardArray from '../components/StudentCardArray';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/index.css';
import '../App.css';



	function App() {
	
	const [studentList, setStudentList] = useState([]);
	const [searchfield, setSearchField] = useState('');
	

	
	
	

    useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
		setStudentList(users)
		})
		
	})


	

	const onSearchChange = (event) => {
		setSearchField(event.target.value);
	};


	
		
		const filteredList = studentList.filter(studentList=> {
			return studentList.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !studentList.length ?
			 <h1>Loading</h1> : 
		(
		<div className ='tc'>

			<Header/>
			<div className ='pa2 ma2'>
				<SearchBox searchChange = {onSearchChange}/>
			</div>
			<div className = 'pa2 ma2'>
			</div>
			<Scroll>
				<StudentCardArray Students = {filteredList} />
			</Scroll>

		 </div>
	);

	}

	


















export default App;