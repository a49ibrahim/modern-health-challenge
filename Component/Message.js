import React, { Component } from "react";
import Moment from 'react-moment';
import App from '../index.js'

const Message = (props) => {
  const keys = []
  return (
    <div>
      <button
                onClick={() => props.sortBy('sentAt')} 
              >
                sort bySent AT
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
                className= "singleMessage">
                <h1> index is {index}</h1>
                <h2> content is {row.content}</h2>
                <h3> sender is{row.senderUuid}</h3>
                <h4> sent at <Moment date={row.sentAt}/> </h4>
                <h5><button
                      onClick={()=> props.deleteMessage() }
                      >Delete Message</button></h5> 
              </div>
            ))
          }
          <button 
          onClick ={() => props.loadMore()} >load more</button>
    </div>
  )
}

export default Message