import React, { Component } from 'react';
import './App.css';
import defaultText from './assets/default-input-text.txt';
import OutputDisplay from './OutputDisplay.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  componentDidMount() {
    this.readTextFile(defaultText);
  }

  readTextFile = file => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          var allText = rawFile.responseText;
          this.setState({
            text: allText
          });
        }
      }
    };
    rawFile.send(null);
  };


  render() {
    return (
      <OutputDisplay displayedText={this.state.text}/>
    );
  }
}

export default App;
