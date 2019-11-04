import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import MessageTable from './Component/MessageTable.js';
import Message from './Component/Message.js';

// This is the list of messages.
import { messages } from "./data.json";
import { findUniqueMessage  } from './Component/utils';


//import themeProvider
import { 
  ThemeProvider, 
  createGlobalStyle 
} from 'styled-components';

//imported this from styles and is used for dark 
//and night mode
const GlobalStyle = createGlobalStyle `
body {
  background-color: ${props =>
    props.theme.mode ==='dark' ? '#111' :'#EEE'};
  color: ${props =>
    props.theme.mode ==='dark' ? '#EEE' :'#111'};
 }
 `;


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
    this.setState({
      messages: messages.sort( (a, b) => (
        this.state.direction[key] === 'asc' ? Date.parse(a[key])- Date.parse(b[key]) : Date.parse(b[key])- Date.parse(a[key])
      )),
      direction: { 
        [key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc'
      }
    })
  }

  //to delete message
  
  deleteMessage = (messageId) => {
	    const messages = this.state.messages;
	    const indexToDelete = messages.findIndex(message => (
	      messageId === findUniqueMessage(message)
	    ))
	    if (indexToDelete === -1) {
	      console.log(`message not availabale ${messageId}`)
	    } else {
	      messages.splice(indexToDelete, 1);
	    }
	    this.setState(previousState => 
      ({messages: messages, 
        MessageCount: this.state.MessageCount - 1}));
  }

  //toggle between dark and light mode
  changeMode = () => {
    this.setState({
      mode: this.state.mode === 'dark'? 'light' : 'dark'
    })  
  }

  //load the next x amount of pages
  loadMore = () => (
    this.setState(prevState => ({MessageCount: prevState.MessageCount + 5}))
	)

  render() {
    return (
      //imported theme provide and Globalstyles for dark 
      //and night mode
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

