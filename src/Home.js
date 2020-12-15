import React from 'react';
import { getToken, removeUserSession } from './Utils/Common';
import axios from 'axios';
 
function Home(props) {
  // handle click event of logout button
  const handleLogout = () => {    
		removeUserSession();
    props.history.push('/login');
  }

	const headers = {
		'Authorization': getToken()
	}

	const currentCount = () => {    
		axios.get('http://localhost:5000/v1/current', { headers: headers }).then(response => {
			return response.data.count;
		}).catch(error => {});
	}

  const nextCount = () => {    
  }

  const resetCount = (val) => {    
  }
 
  return (
    <div>
      Welcome User!<br /><br />
			<div>
				{ currentCount() }
			</div>
			
      <input type="button" onClick={nextCount} value="Next" />
			<br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Home;
