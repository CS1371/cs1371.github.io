import React, { Component } from 'react';
import './App.css';
import Developer from './Developer'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      developers: []
    };
  }

  componentDidMount() {
    fetch('./developers.json')
    .then(response => response.json())
    .then(data => this.setState({developers: data}));
  }

  render() {
      const developers = [];
      for (let i = 0; i < this.state.developers.length; i++) {
        const dev = this.state.developers[i];
        developers.push(
          <Developer key={dev.gtUsername} id={dev.gtUsername} name={dev.name} title={dev.title} bio={dev.bio}  />
        );
      }
      const devs = <div className="developers">{developers}</div>;
      const title = <h1>CS 1371 Software Development</h1>;
      const logo = <img src="branding/CourseBrand.png" alt="logo" id="logo" />;
      return <div className="container">{logo}{title}{devs}</div>;
    
  }
}

export default App;
