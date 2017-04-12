import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({
      projects: [
        {
          title: "Bussiness Website",
          category: "Web Design"
        },
        {
          title: "Other Website",
          category: "Web Design"
        }
      ]
    })
  } 

  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
