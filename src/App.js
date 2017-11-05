import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInformation from './UserInformation';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            user: {},
            infoStatus: ''
        }
    }

    getUserInformation() {
        fetch('https://api.github.com/users/nuno-rodrigues')
        .then(function(data) {
            console.log(data.login);
            this.setState({
                user: data.login,
                infoStatus: 'loaded'
            })
            return data;
        })
        .catch(function(error) {
            console.log('error');
        })
    }

    render() {

        return ( 
            <div className="App">
                <div className="App-header">
                    <img src={ logo }className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro"> To get started, edit <code> src / App.js </code> and save to reload. </p>
                <div className="App-intro">
                    <hr/>
                    <p> Click on the button to fetch the user information </p>
                    <button onClick={ this.getUserInformation.bind(this) }>Click me</button>
                </div>
                {this.state.infoStatus === 'loaded'
                    ?
                    <UserInformation getUserInformation />
                    :
                    <p>Loading ...</p>    
                }
            </div>
        );
    }
}

export default App;