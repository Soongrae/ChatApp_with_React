import React, { useState, useContext } from 'react'

// import firebase from '../config/firebase'

import { AuthContext } from '../AuthService'

const Room = () => {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')

    const user = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        setMessages([
            ...messages,
            {
                user: 'John',
                content: value
            }
        ])
        // setValue('')
    }

    return (
        <>
            <h1>Room</h1>
            <p>Logged in User: {user ? user.email : "...loading"}</p>
            <ul>
                {
                    messages.map(message => {
                        return (
                            <li>
                                <span>{message.user}: </span>
                                {message.content}
                            </li>
                        )
                    })
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    // value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type='submit'>send</button>
            </form>
            <button>ログアウト</button>
        </>
    )
}

export default Room