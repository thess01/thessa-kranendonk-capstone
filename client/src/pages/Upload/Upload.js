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
        description: ''
    }

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



    validateInput = (input) => {
        if (!input) {
            return false;
        }
        return true;
    };

    handleUpload = (e) => {
        e.preventDefault();
        axios.post('/api/beers/upload', {
            description: e.target.description.value,
            beerName: e.target.beerName.value,
            beerType: e.target.beerType.value,
            season: e.target.season.value,
            ABV: e.target.abv.value,
            flavor: e.target.flavor.value,
            brewery_id: this.state.breweryInfo.brewery_id,
            image: "/beer_1.jpg"

        })
            .then(res => {
                console.log(res)
                this.props.history.push('/')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    validateForm = () => {
        if (!this.state.beerName) return false;
        if (!this.state.description) return false;
        if (!this.state.beerType) return false;
        if (!this.state.season) return false;
        if (!this.state.flavor) return false;
        if (!this.state.ABV) return false;
        return true;
    };


    render() {
        const { isLoading, breweryInfo } = this.state;

        return isLoading ?
            <h1>Loading...</h1>
            :
            (
                <section className="upload">
                    <h1 className="upload__header">Upload Brews {breweryInfo.breweryName}</h1>

                    <div className="upload__wrapper">
                        <form className="upload__form" onSubmit={this.handleUpload}>
                            <label className="upload__label" htmlFor="beerName">Beer Name</label>
                            <input className={this.validateInput(this.state.beerName)
                                ? "upload__input"
                                : "upload__input--error"}
                                type="text"
                                name="beerName"
                                placeholder="Beer Name"
                            ></input>
                            <label className="upload__label" htmlFor="beerType">Beer Type</label>
                            <input className={this.validateInput(this.state.beerType)
                                ? "upload__input"
                                : "upload__input--error"}
                                type="text"
                                name="beerType"
                                placeholder="Beer Type"
                            ></input>
                            <label className="upload__label" htmlFor="description">Description</label>
                            <input className={this.validateInput(this.state.description)
                                ? "upload__input"
                                : "upload__input--error"}
                                type="text"
                                name="description"
                                placeholder="Beer description"
                            ></input>

                            <label className="upload__label" htmlFor="flavor">Flavor</label>
                            <input className={this.validateInput(this.state.flavor)
                                ? "upload__input"
                                : "upload__input--error"}
                                type="text"
                                name="flavor"
                                placeholder="Beer flavor"
                            ></input>

                            <label className="upload__label" htmlFor="season">Season</label>
                            <input className={this.validateInput(this.state.season)
                                ? "upload__input"
                                : "upload__input--error"}
                                type="text"
                                name="season"
                                placeholder="Season"
                            ></input>

                            <label className="upload__label" htmlFor="abv">ABV</label>
                            <input className={this.validateInput(this.state.description)
                                ? "upload__input"
                                : "upload__input--error"}
                                type="text"
                                name="abv"
                                placeholder="Beer ABV"
                            ></input>
                            <div className="upload__button-wrapper">
                            <button className="upload__submit" type="submit">Upload</button>
                            <Link className="upload__cancel" to="/">Cancel</Link>
                            </div>
                    
                        </form>
                    </div>
                </section>


            )
    }


}
export default Upload;