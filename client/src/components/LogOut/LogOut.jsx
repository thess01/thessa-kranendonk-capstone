import { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
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
                    this.setState({
                        isLoading: false,
                        breweryInfo: response.data
                    })
                })
                .catch((error) => {
                    console.log(error);
                  });
        } 
    }


    handleLogOut = (e) => {
        e.preventDefault();

        sessionStorage.removeItem('authToken')
        this.setState({
            breweryInfo: null
        })

        this.props.history.push('/')
    }

    render() {
        return (
    <>
    {this.state.breweryInfo ? (
        
        <div className="logout">
            <p className="logout__welcome">Welcome, {this.state.breweryInfo.breweryName}</p>
           <button className="logout__button" onClick={this.handleLogOut}>Log Out</button>
        </div>
         
        ) : (
    
            <div>
            <p></p>
          </div>
    )
        
    }
    </>
        )}
}

export default withRouter(LogOut);