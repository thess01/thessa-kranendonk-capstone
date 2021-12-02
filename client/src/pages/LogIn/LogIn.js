import axios from 'axios';
import React from 'react'
import {Link} from 'react-router-dom';
import Input from '../../components/Input/Input'
import './Login.scss';

function LogIn(props) {

    const handleLogIn = (e) => {
        e.preventDefault();
        console.log({
            breweryName: e.target.breweryName.value,
            password: e.target.password.value
        })

        axios.post('/api/login', {
            breweryName: e.target.breweryName.value,
            password: e.target.password.value
        })
        .then(res => {
            console.log(res)
            let token = res.data.token
            sessionStorage.setItem('authToken', token)
            props.history.push('/upload')
        })
    }

    return (
        <div className="login">
            <h1 className="login__header">Brewery Log In</h1>
            <form onSubmit={handleLogIn}>
                <Input label="Brewery Name" name="breweryName" type="text" />
                <Input label="Password" name="password" type="password" />
                <div className="login__button-wrapper">
                <button className="login__submit" type="submit">Log In</button>
                <Link className="login__signup" to="/signup">Sign Up</Link>
                </div>
            </form>
           
        </div>
    )
}

export default LogIn;