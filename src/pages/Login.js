import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                    />
                </div>
                
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                    />
                </div>
                <button type='submit'>ログイン</button>
            </form>
            <Link to='/signup'>新規登録</Link>
        </>
    )
}

export default Login