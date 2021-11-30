import axios from 'axios';
import React from 'react'

class Upload extends React.Component {
    state = {
        isLoading: true,
        breweryInfo: {}
    }

    componentDidMount() {
        let token = sessionStorage.getItem('authToken')

        if(!!token) {
            axios.get('http://localhost:8080/breweries/current', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                this.setState({
                    isLoading: false,
                    breweryInfo: response.data
                })
            })
        } else {
            this.props.history.push('./login')
    }
    }

    render(){
        const {isLoading, breweryInfo} = this.state;

        return isLoading ?
        <h1>Loading...</h1>
        :
        (
            <div className="upload">
                <h1 className="upload__header">Welcome {breweryInfo.breweryName}</h1>
            </div>
        )
    }


}
export default Upload;