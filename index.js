import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import MessageTable from './Component/MessageTable.js';

// This is the list of messages.
import { messages } from "./data.json";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: messages,
      direction: {
        sentAT: 'asc',
      }
    }

    this.sortBy = this.sortBy.bind(this);
    
  }
  
  sortBy(key){
    this.setState({
      data: messages.sort( (a, b) => (
        this.state.direction[key] === 'asc' ? Date.parse(a[key])- Date.parse(b[key]) : Date.parse(b[key])- Date.parse(a[key])
      )),
      direction: { 
        [key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc'
      }
    })
  }

  render() {
    
    return <MessageTable 
      data={this.state.data}
      sortBy={this.sortBy}
      />
      
    
  }
}

render(<App />, document.getElementById("root"));

export default App