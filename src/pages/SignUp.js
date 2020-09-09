import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import firebase from '../config/firebase'
import 'bootstrap/dist/css/bootstrap.min.css'

const SignUp = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            // .then(() => {
            //     console.log('SignUp succeed!')
            //     history.push('/')
            // })
            .then(({ user }) => {
                user.updateProfile({
                    displayName: name
                })
                history.push('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const unSignup = name === "" || email === "" || password === ""

    return (
        <div className='container text-center'>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-primary' disabled={unSignup}>新規登録</button>
            </form>
            <Link to='/login' className='btn btn-link'>ログイン</Link>
        </div>
    )
}

export default SignUp