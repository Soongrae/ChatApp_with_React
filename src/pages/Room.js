import React, { useState, useContext, useEffect } from 'react'

import firebase from '../config/firebase'

import { AuthContext } from '../AuthService'
import 'bootstrap/dist/css/bootstrap.min.css'

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
            user: user.displayName,
            content: value
        })
        setValue('')
    }


    // const day = new Date()
    // console.log(day)
    // console.log(`${day.getMonth() + 1}月 ${day.getDate()}日`)


    return (
        <div className='container text-center'>
            <h1>Room</h1>
            <h6>Logged in User: {user ? user.email : "...loading"}</h6>
            <ul className='list-unstyled'>
                {
                    messages.map((message, id) => {
                        return (
                            <li key={id}>
                                {message.user}: {message.content}
                                {/* <p className='text-right'>{`${day}`}</p> */}
                            </li>
                        )
                    })
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <textarea
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-success'>Send</button>
            </form>
            <div className='text-right'>
                <button onClick={() => firebase.auth().signOut()} className='btn btn-danger'>ログアウト</button>
            </div>
        </div>
    )
}

export default Room