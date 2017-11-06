import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInformation from './UserInformation';
import ReposInformation from './ReposInformation';

const githubURL = `https://api.github.com/users/`;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            infoMessage: '',
            detailsGithub: {},
            repos: []
        }
    }

    getUserInformation() {
        fetch(githubURL+this.state.username)
        .then(d => d.json())
        .then(d => {
            this.setState({
                detailsGithub: d
            });
        });
    }

    getReposInformation() {    
        fetch(githubURL+this.state.username+'/repos')
        .then(d => d.json())
        .then(d => {
            this.setState({
                repos: d
            });
        });
    }

    handleNameOnChange(e) {
        this.setState({
            username: e.target.value
        });
        if (this.state.username === ''){
            this.setState({
                detailsGithub: {},
                repos: []
            })
        }
    }

    render() {

        return ( 
            <div className="App">
                <div className="App-header">
                    <img src={ logo }className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                
                <div className="App-intro">
                    <p>Fetch data from: {githubURL}<input type="text" id="name" value={this.state.username} onChange={ (e) => this.handleNameOnChange(e) } /></p>
                    {this.state.username &&
                        <div>
                            <div className="App-user-wrapper">
                            {!this.state.detailsGithub.name &&
                                <button onClick={ this.getUserInformation.bind(this) }>User Login</button>
                            }
                            {this.state.detailsGithub.name ?
                                <UserInformation name={this.state.detailsGithub.name}/>
                                :
                                this.state.infoMessage
                            }
                            </div>
                            <div className="App-repos-wrapper">
                            {this.state.repos.length === 0 &&
                                <button onClick={ this.getReposInformation.bind(this) }>Show all repos</button>
                            }
                            <ReposInformation repos={this.state.repos}/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default App;