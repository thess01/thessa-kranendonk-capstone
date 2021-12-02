import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
import Input from '../../components/Input/Input';
import "./SignUp.scss";



function SignUp(props) {
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log({
            breweryName: e.target.breweryName.value,
            password: e.target.password.value,
            email: e.target.email.value
        })

        axios.post('/api/signup', {
            breweryName: e.target.breweryName.value,
            password: e.target.password.value,
            email: e.target.email.value,
            address: e.target.address.value,
            cityState: e.target.cityState.value,
            country: e.target.country.value,
            phone: e.target.phone.value
        })
        .then(res => {
            console.log(res)
            props.history.push('/current')
        })
        .catch((error) => {
            console.log(error);
          });
    }

    return (
        <div className="signup">
        <h1 className="signup__header">Brewery Sign Up</h1>
        <form onSubmit={handleSignUp}>
            <Input label="Brewery Name" name="breweryName" type="text" />
            <Input label="Password" name="password" type="password" />
            <Input label="Email" name="email" type="email" />
            <Input label="Address" name="address" type="text" />
            <Input label="City, State" name="cityState" type="text" />
            <Input label="Country" name="country" type="text" />
            <Input label="Phone Number" name="phone" type="text" />
            <div className="signup__button-wrapper">
            <button className="signup__submit"type="submit">Sign Up!</button>
            <Link className="signup__login"to="/login">Log In</Link>
            </div>
        </form>

        
    </div>
    )
}
export default SignUp