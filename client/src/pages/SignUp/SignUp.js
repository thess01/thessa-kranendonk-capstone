import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import Input from '../../components/Input/Input';
import "./SignUp.scss";



class SignUp extends Component {
    state = {
        breweryName: '',
        password: '',
        email: '',
        address: '',
        cityState: '',
        country: '',
        phone: '',
        isValid: true
    }

    validateForm = () => {
        if (!this.state.breweryName)  {
            this.setState({isValid: false})
            return false};
        if (!this.state.password)  {
            this.setState({isValid: false})
            return false};
        if (!this.state.email)  {
            this.setState({isValid: false})
            return false};
        if (!this.state.address)  {
            this.setState({isValid: false})
            return false};
        if (!this.state.cityState)  {
            this.setState({isValid: false})
            return false};
        if (!this.state.country)  {
            this.setState({isValid: false})
            return false};
        if (!this.state.phone)  {
            this.setState({isValid: false})
            return false};
        return true;
    };


        handleSignUp = (e) => {
        e.preventDefault();
        if(this.validateForm()) {
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
            this.props.history.push('/current')
        })
        .catch((error) => {
            console.log(error);
          });
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

 render(){
    return (
       
        <section class="signup">
           
            <div className="signup__wrapper">
            <h1 className="signup__header">Brewery Sign Up</h1>
            <form onSubmit={this.handleSignUp}>
                <Input label="Brewery Name" name="breweryName" type="text" onChange={this.handleChange} className={this.state.isValid
                                    ? "signup__input"
                                    : "signup__input--error"}/>
                    <p className={this.state.isValid
                                    ? "signup__warning--none"
                                    : "signup__warning--error"}>This field is required</p>
                <Input label="Password" name="password" type="password" onChange={this.handleChange} className={this.state.isValid
                                    ? "signup__input"
                                    : "signup__input--error"}/>
                <p className={this.state.isValid
                    ? "signup__warning--none"
                    : "signup__warning--error"}>This field is required</p>
                <Input label="Email" name="email" type="email" onChange={this.handleChange} className={this.state.isValid
                                    ? "signup__input"
                                    : "signup__input--error"}/>
                <p className={this.state.isValid
                    ? "signup__warning--none"
                    : "signup__warning--error"}>This field is required</p>
                <Input label="Address" name="address" type="text" onChange={this.handleChange} className={this.state.isValid
                                    ? "signup__input"
                                    : "signup__input--error"}/>
                <p className={this.state.isValid
                    ? "signup__warning--none"
                    : "signup__warning--error"}>This field is required</p>
                <Input label="City, State" name="cityState" type="text" onChange={this.handleChange} className={this.state.isValid
                                    ? "signup__input"
                                    : "signup__input--error"}/>
                <p className={this.state.isValid
                    ? "signup__warning--none"
                    : "signup__warning--error"}>This field is required</p>
                <Input label="Country" name="country" type="text" onChange={this.handleChange} className={this.state.isValid
                                    ? "signup__input"
                                    : "signup__input--error"}/>
                <p className={this.state.isValid
                    ? "signup__warning--none"
                    : "signup__warning--error"}>This field is required</p>
                <Input label="Phone Number" name="phone" type="text" onChange={this.handleChange} className={this.state.isValid
                                    ? "signup__input"
                                    : "signup__input--error"}/>
                <p className={this.state.isValid
                    ? "signup__warning--none"
                    : "signup__warning--error"}>This field is required</p>
                <div className="signup__button-wrapper">
                <button className="signup__submit"type="submit">Sign Up!</button>
                <Link className="signup__login"to="/login">Log In</Link>
                </div>
            </form>
            
                </div>
                
        </section>
    )
 }
}
export default SignUp