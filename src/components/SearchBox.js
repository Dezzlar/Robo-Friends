import React from 'react';




const SearchBox = ({searchField, searchChange}) => {

	return(
		<div className ='pa2 ma2'>
			<input 
				className = "tc br3 pa2 ba b--green bg-lightest-blue"
				name ="search"
				placeholder = "Search Members"
				onChange = {searchChange}
				
			/>
		</div>
	);
}






















export default SearchBox;