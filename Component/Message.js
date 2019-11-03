import React, { Component } from "react";
import Moment from 'react-moment';
import App from '../index.js'


const Message = (props) => {
  const keys = []
  return (
    <div>
      <div className='appHeader' > 
        <button
        onClick={() => props.changeMode()}
        >Night Mode</button>
        <h1>Welcome to Message App</h1>
        <h2>Courtsey of Ali Ibrahim</h2>
        <button
          onClick={() => props.sortBy('sentAt')}
        > sort bySent AT
        </button>
      </div>
      {
         props.messages
          .filter(obj => {
          let key = obj.content+"#"+obj.uuid; 
          return !keys.includes(key) && keys.push(key); 
          })
          .slice(0, (props.MessageCount-1))
          .map((row,index) => (
           <div 
              key= {index}
              className= "singleMessage"
            >
            <h1> {row.content}</h1>
            <h2> from {row.senderUuid}</h2>
            <h3> at <Moment date={row.sentAt}/> </h3>
            <button
              onClick={()=> props.deleteMessage() }
              >Delete Message</button> 
              </div>
            ))
          }
          <button 
          onClick ={() => props.loadMore()} 
          >load more
          </button>
          
    </div>
  )
}

export default Message

/*
document.body.style.backgroundColor === 'white'?
          'black' : 'white'
*/