import React from 'react';









const status = {
    online: {
        backgroundColor: 'green',
        color : 'black',
    },
    offline: {
        backgroundColor: 'yellow',
        color : 'grey'
    },
}

const StudentCard = (props) => {
	return (
			<div  className = ' tc dib ma3 pa3 br4 grow bg-light-green '>
				<img alt ='robots' src = { `https://robohash.org/${props.id}/?set=set3`} style = {{height:210, width:275}}/>
				<h3 style ={{color: 'black', fontSize: '1.2rem'}}>{props.name}</h3>
				<div className = 'f4 b animate__animated animate__bounce'>
					<p style ={props.online ? status.online  : status.offline}>{props.online ? 'Online': 'Offline'}</p>
					<p2 style = {{color: 'black'}}>{props.email}</p2>
				</div>
			 </div>
		);
}












export default StudentCard; 