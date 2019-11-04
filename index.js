import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

import Message from './Component/Message.js';

// This is the list of messages.
import { messages } from "./data.json";
import { findUniqueMessage, GlobalStyle  } from './Component/utils';


//import themeProvider
import { ThemeProvider  } from 'styled-components';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: messages,
      direction: {
        sentAT: 'asc',
      },
      MessageCount: 6,
      mode: 'dark'
    } 
  }

  //for sorting. toggle sort
  sortBy = (key) =>{
    this.setState(prevState=> ({
      messages: messages.sort( (a, b) => (
        this.state.direction[key] === 'asc' ? Date.parse(a[key])- Date.parse(b[key]) : Date.parse(b[key])- Date.parse(a[key])
      )),
      direction: { 
        [key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc'
      }
    }))
  }

  //to delete message
  
  deleteMessage = (messageId) => {
	    const messages = this.state.messages;
	    const indexToDelete = messages.findIndex(message => (
	      messageId === findUniqueMessage(message)
	    ))
	    if (indexToDelete === -1) {
	      console.log(`cant find ${messageId}`)
	    } else {
	      messages.splice(indexToDelete, 1);
	    }
	    this.setState(prevState =>(
      {messages: messages, 
        MessageCount: this.state.MessageCount - 1}));
  }

  //toggle between dark and light mode
  changeMode = () => {
    this.setState(prevState => ({
      mode: this.state.mode === 'dark'? 'light' : 'dark'
    }))  
  }

  //load the next x amount of pages
  loadMore = () => (
    this.setState(prevState => ({MessageCount: prevState.MessageCount + 5}))
	)

  render() {
    return (
      //imported theme provide and Globalstyles for dark 
      //and light mode
      <ThemeProvider theme={ {mode: this.state.mode} }>
        <>
          <GlobalStyle />
          <Message 
          messages={this.state.messages}
          sortBy={this.sortBy}
          MessageCount={this.state.MessageCount}
          loadMore = {this.loadMore}
          deleteMessage= {this.deleteMessage}
          changeMode = {this.changeMode}
          />
        </>
    </ThemeProvider>
    )  
  }
}

render(<App />, document.getElementById("root"));

export default App
