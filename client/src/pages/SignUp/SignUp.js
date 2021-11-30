import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';


function SignUp(props) {
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log({
            breweryName: e.target.breweryName.value,
            password: e.target.password.value,
            email: e.target.email.value
        })

        axios.post('http://localhost:8080/breweries/register', {
            breweryName: e.target.breweryName.value,
            password: e.target.password.value,
            email: e.target.email.value,
            address: e.target.address.value,
            cityState: e.target.cityState.value,
            phone: e.target.phone.value
        })
        .then(res => {
            console.log(res)
            props.history.push('/login')
        })
    }

    return (
        <div className="signup">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
            <Input label="BreweryName" name="breweryName" type="text" />
            <Input label="Password" name="password" type="password" />
            <Input label="Email" name="email" type="email" />
            <Input label="Address" name="address" type="text" />
            <Input label="cityState" name="cityState" type="text" />
            <Input label="Phone" name="phone" type="text" />

            <button type="submit">Sign Up!</button>
        </form>
        <Link to="/login">Log In</Link>
    </div>
    )
}
export default SignUp