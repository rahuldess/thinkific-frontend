import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
 
function Login(props) {
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
		setError(null);
    setLoading(true);

    axios.post('http://localhost:5000/login', { user: { email: email.value, password: password.value }}).then(response => {
      setLoading(false);
      setUserSession(response.headers['authorization']);
      props.history.push('/home');
    }).catch(error => {
			debugger;
      setLoading(false);
      if (error.response.status !== 200) setError(error.response.data);
    });
  }
 
  return (
    <div>
      Login<br /><br />
      <div>
        Email<br />
        <input type="email" {...email} />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;
