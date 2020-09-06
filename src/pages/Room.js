import React, { useState, useContext, useEffect } from 'react'

import firebase from '../config/firebase'

import { AuthContext } from '../AuthService'

const Room = () => {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')
    
    useEffect(() => {
        firebase.firestore().collection('messages')
            .onSnapshot(snapshot => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })

                setMessages(messages)
            })
    }, [])

    const user = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        firebase.firestore().collection('messages').add({
            content: value,
            user: user.displayName
        })

        // setMessages([
        //     ...messages,
        //     {
        //         user: 'John',
        //         content: value
        //     }
        // ])
        setValue('')
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
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type='submit'>send</button>
            </form>
            <button onClick={() => {
                firebase.auth().signOut()
            }}>ログアウト</button>
        </>
    )
}

export default Room