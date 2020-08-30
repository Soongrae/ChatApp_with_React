import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import firebase from '../config/firebase'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Login succeed!')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>ログイン</button>
            </form>
            <Link to='/signup'>新規登録</Link>
        </>
    )
}

export default Login