import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import firebase from '../config/firebase'

const SignUp = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            // .then(() => {
            //     console.log('SignUp succeed!')  // あっても無くてもどちらでも
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
        <>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        onChange={e => setName(e.target.value)}
                    />
                </div>

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
                <button type='submit' disabled={unSignup}>新規登録</button>
            </form>
            <Link to='/login'>ログイン</Link>
        </>
    )
}

export default SignUp