function Login() {
	return (
		<main className='login-page'>
			<form className='login-form' aria-label='Login form'>
				<h1>Login</h1>
				<div className='form-field'>
					<label htmlFor='username'>Username</label>
					<input id='username' name='username' type='text' autoComplete='username' />
				</div>
				<div className='form-field'>
					<label htmlFor='password'>Password</label>
					<input id='password' name='password' type='password' autoComplete='current-password' />
				</div>
				<button type='submit'>Log innn</button>
			</form>
		</main>
	)
}

export default Login
