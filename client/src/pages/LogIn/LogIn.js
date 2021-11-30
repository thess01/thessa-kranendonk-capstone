import axios from 'axios';
import React from 'react'
import {Link} from 'react-router-dom';

function LogIn(props) {

    const handleLogIn = (e) => {
        e.preventDefault();
        console.log({
            breweryName: e.target.breweryName.value,
            password: e.target.password.value
        })

        axios.post('http://localhost:8080/users/login', {
            breweryName: e.target.breweryName.value,
            password: e.target.password.value
        })
        .then(res => {
            console.log(res)
            let token = res.data.token
            sessionStorage.setItem('authToken', token)
            props.history.push('/')
        })
    }

    return (
        <div className="login">
            <h1>Log In</h1>
            <form onSubmit={handleLogIn}>
                <Input label="breweryName" name="breweryName" type="text" />
                <Input label="Password" name="password" type="password" />
                <button type="submit">Log In</button>
            </form>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}

export default LogIn;