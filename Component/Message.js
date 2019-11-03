import React, { Component } from "react";
import Moment from 'react-moment';
import App from '../index.js'


const Message = (props) => {
  const keys = []
  return (
    <div>
      <h1>Welcome to the mess app</h1>
      <h2>Courtsey of Ali Ibrahim</h2>
      <button>Night Mode</button>
      <button
         onClick={() => props.sortBy('sentAt')} 
       > sort bySent AT
        </button>
      {
         props.messages
          .filter(obj => {
          let key = obj.content+"#"+obj.uuid; 
          return !keys.includes(key) && keys.push(key); 
          })
          .slice(0, (props.MessageCount-1))
          .map((row,index) => (
           <div 
              id= {index}
              className= "singleMessage"
            >
            <h2> {row.content}</h2>
            <h3> from {row.senderUuid}</h3>
            <h4> at <Moment date={row.sentAt}/> </h4>
            <button
              onClick={()=> props.deleteMessage() }
              >Delete Message</button> 
              </div>
            ))
          }
          <button 
          onClick ={() => props.loadMore()} >load more</button>
    </div>
  )
}

export default Message

/*
document.body.style.backgroundColor === 'white'?
          'black' : 'white'
*/