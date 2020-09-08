import React, { useState, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'

import firebase from '../config/firebase'
import { AuthContext } from '../AuthService'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const user = useContext(AuthContext)

    if (user) {
        return (
            <Redirect to='/' />
        )
    }

    const handleSubmit = e => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Login succeed!')  // あっても無くてもどちらでも
                history.push('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const unLogin = email === "" || password === ""

    return (
        <div className='container text-center'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input
                        // className="form-control"
                        type='email'
                        id='email'
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input
                        // className="form-control"
                        type='password'
                        id='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-primary' disabled={unLogin}>ログイン</button>
            </form>
            <Link to='/signup' className='btn btn-link'>新規登録</Link>
        </div>
    )
}

export default Login