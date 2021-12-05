import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './LogOut.scss';

class LogOut extends Component {
    state= {
        breweryInfo: null
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
        } 
    }

    // componentDidUpdate() {

    // }

    handleLogOut = (e) => {
        e.preventDefault();

        sessionStorage.removeItem('authToken')
        this.props.history.push('/')
    }

    render() {
        return (
    <>
    {this.state.breweryInfo ? (
        
        <div className="logout-field">
            <p>Welcome, {this.state.breweryInfo.breweryName}</p>
           <button onClick={this.handleLogOut}>Log Out</button>
        </div>
         
        ) : (
    
            <div>
            <h1 className="loading">Log In</h1>
          </div>
    )
        
    }
    </>
        )}
}

export default withRouter(LogOut);