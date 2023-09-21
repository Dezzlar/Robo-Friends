import React, {Component} from 'react';
import StudentCardArray from '../components/StudentCardArray';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/index.css';
import '../App.css';



class App extends Component{
	constructor()
	{
		super()
		this.state = {
			studentList: [],
			searchfield: ''
		}
	}
	

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
			this.setState({studentList: users})
		})
		
	}
	onSearchChange = (event) => {
		this.setState({searchfield:event.target.value})
	};


	render(){
		const {studentList, searchfield} = this.state;
		const filteredList = studentList.filter(studentList=> {
			return studentList.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !studentList.length ?
			 <h1>Loading</h1> : 
		(
		<div className ='tc'>

			<Header/>
			<div className ='pa2 ma2'>
				<SearchBox searchChange = {this.onSearchChange}/>
			</div>
			<div className = 'pa2 ma2'>
			</div>
			<Scroll>
				<StudentCardArray Students = {filteredList} />
			</Scroll>

		 </div>
	);

	}

	

}

















export default App;