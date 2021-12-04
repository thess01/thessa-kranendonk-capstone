import axios from 'axios';
import React from 'react';
import {Link} from "react-router-dom"
import { Component } from 'react';
import './Upload.scss';


class Upload extends Component {
    state = {
        isLoading: true,
        breweryInfo: [],
        beerName: '',
        season: '',
        flavor: '',
        ABV: '',
        beerType: '',
        description: '',
        isValid: true
    }


    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

    handleUpload = (e) => {
        e.preventDefault();
        if(this.validateForm()) {
        axios.post('/api/beers/upload', {
            description: e.target.description.value,
            beerName: e.target.beerName.value,
            beerType: e.target.beerType.value,
            season: e.target.season.value,
            ABV: e.target.ABV.value,
            flavor: e.target.flavor.value,
            brewery_id: this.state.breweryInfo.brewery_id,
            image: "https://res.cloudinary.com/dybcfr6cd/image/upload/v1638498894/Used/josh-olalde-YjTtHDe-5Z0-unsplash_sjquib.jpg"

        })
            .then(res => {
                console.log(res)
                this.props.history.push('/')
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    validateForm = () => {
        if (!this.state.beerName) {
            this.setState({isValid: false})
            return false};
        if (!this.state.description) {
            this.setState({isValid: false})
            return false};
        if (!this.state.beerType) {
            this.setState({isValid: false})
            return false};
        if (!this.state.season) {
            this.setState({isValid: false})
            return false};
        if (!this.state.flavor) {
            this.setState({isValid: false})
            return false};
        if (!this.state.ABV) {
            this.setState({isValid: false})
            return false};
        return true;
    };


    componentDidMount() {
        let token = sessionStorage.getItem('authToken')
        if (!!token) {
            axios.get('/api/upload', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    console.log(response)
                    this.setState({
                        isLoading: false,
                        breweryInfo: response.data
                    })
                })
        } else {
            this.props.history.push('./upload')
        }
    }



    render() {
        const { isLoading, breweryInfo } = this.state;

        return isLoading ?
            <div className="upload__message-wrapper">
            <h1 className="upload__upload-message">Breweries need to be registered or logged in to upload new beers</h1>
            <Link className="upload__link-register" to="/signup">Please register here!</Link>
            </div>
            :
            (
                <section className="upload">
                    <div class="upload__wrapper">
                        <h1 className="upload__header">Upload Brews {breweryInfo.breweryName}</h1>
                        <div className="upload__wrapper-form">
                            <form className="upload__form" onSubmit={this.handleUpload}>
                                <label className="upload__label" htmlFor="beerName">Beer Name</label>
                                <input className={this.state.isValid
                                    ? "upload__input"
                                    : "upload__input--error"}
                                    type="text"
                                    name="beerName"
                                    placeholder="Beer Name"
                                    onChange={this.handleChange}
                                ></input>
                                <p className={this.state.isValid
                                        ? 'upload__warning--none'
                                        : 'upload__warning--error'}>This field is required</p>
                                <label className="upload__label" htmlFor="beerType">Beer Type</label>
                                <input className={this.state.isValid
                                    ? "upload__input"
                                    : "upload__input--error"}
                                    type="text"
                                    name="beerType"
                                    placeholder="Beer Type"
                                    onChange={this.handleChange}
                                ></input>
                                   <p className={this.state.isValid
                            ? 'upload__warning--none'
                            : 'upload__warning--error'}>This field is required</p>
                                <label className="upload__label" htmlFor="description">Description</label>
                                <input className={this.state.isValid
                                    ? "upload__input"
                                    : "upload__input--error"}
                                    type="text"
                                    name="description"
                                    placeholder="Beer description"
                                    onChange={this.handleChange}
                                ></input>
                                   <p className={this.state.isValid
                            ? 'upload__warning--none'
                            : 'upload__warning--error'}>This field is required</p>
                                <label className="upload__label" htmlFor="flavor">Flavor</label>
                                <input className={this.state.isValid
                                    ? "upload__input"
                                    : "upload__input--error"}
                                    type="text"
                                    name="flavor"
                                    placeholder="Beer flavor"
                                    onChange={this.handleChange}
                                ></input>
                                   <p className={this.state.isValid
                            ? 'upload__warning--none'
                            : 'upload__warning--error'}>This field is required</p>
                                <label className="upload__label" htmlFor="season">Season</label>
                                <input className={this.state.isValid
                                    ? "upload__input"
                                    : "upload__input--error"}
                                    type="text"
                                    name="season"
                                    placeholder="Season"
                                    onChange={this.handleChange}
                                ></input>
                                   <p className={this.state.isValid
                            ? 'upload__warning--none'
                            : 'upload__warning--error'}>This field is required</p>
                                <label className="upload__label" htmlFor="ABV">ABV</label>
                                <input className={this.state.isValid
                                    ? "upload__input"
                                    : "upload__input--error"}
                                    type="text"
                                    name="ABV"
                                    placeholder="Beer ABV"
                                    onChange={this.handleChange}
                                ></input>
                                   <p className={this.state.isValid
                            ? 'upload__warning--none'
                            : 'upload__warning--error'}>This field is required</p>
                                <div className="upload__button-wrapper">
                                <button className="upload__submit" type="submit">Upload</button>
                                <Link className="upload__cancel" to="/">Cancel</Link>
                                </div>
                        
                            </form>
                        </div>
                    </div>
                </section>


            )
    }


}
export default Upload;