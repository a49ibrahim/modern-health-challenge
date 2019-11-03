import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import MessageTable from './Component/MessageTable.js';
import Message from './Component/Message.js';


// This is the list of messages.
import { messages } from "./data.json";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: messages,
      direction: {
        sentAT: 'asc',
      },
      MessageCount: 6
    }

    this.sortBy = this.sortBy.bind(this);
    
  }
  
  sortBy(key){
    this.setState({
      messages: messages.sort( (a, b) => (
        this.state.direction[key] === 'asc' ? Date.parse(a[key])- Date.parse(b[key]) : Date.parse(b[key])- Date.parse(a[key])
      )),
      direction: { 
        [key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc'
      }
    })
  }

deleteMessage = (index, e) =>{
  const messages = Object.assign([],this.state.messages);
  messages.splice(index, 1);
  this.setState({messages: messages})
}

  loadMore = () => (
	    this.setState(prevState => ({MessageCount: prevState.MessageCount + 5}))
	  )

  render() {
    
    return <Message 
      messages={this.state.messages}
      sortBy={this.sortBy}
      MessageCount={this.state.MessageCount}
      loadMore = {this.loadMore}
      deleteMessage = {this.deleteMessage}
      />

      
  }
}

render(<App />, document.getElementById("root"));

export default App