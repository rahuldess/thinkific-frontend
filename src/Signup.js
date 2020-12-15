import React, { props, useState } from "react";

function Signup() {
	const email = useFormInput('');
	const password = useFormInput('');
	const passwordConfirmation = useFormInput('');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	// handle button click of sign up form
	const handleSignup = () => {
		props.history.push('/login');
	}

	return (
		<div>
		Sign Up<br /><br />
		<div>
		Email<br />
		<input type="email" {...email} />
		</div>
		<div style={{ marginTop: 10 }}>
		Password<br />
		<input type="password" {...password} />
		Password Confirmation<br />
		<input type="password" {...password} />
		</div>
		{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
			<input type="button" value={loading ? 'Loading...' : 'Sign Up'} onClick={handleSignup} disabled={loading} /><br />
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

		export default Signup;

