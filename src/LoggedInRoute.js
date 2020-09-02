import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './AuthService'

const LoggedInRoute = ({ component: Component, ...rest }) => {
    const user = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={routeProps => {
                return(
                    user ?
                        <Component {...routeProps} /> :
                        <Redirect to='/login' />
                )
            }}
        >
        </Route>
    )
}

export default LoggedInRoute