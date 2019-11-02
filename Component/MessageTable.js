import React, { Component } from "react";
import Moment from 'react-moment';
import App from '../index.js'


  function MessageTable(props){
    const keys = []
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>content</th>
            <th>sender</th>
            <th>
              <button
                onClick={() => props.sortBy('sentAt')} 
              >
                Sent AT
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            props.data
            .filter(obj => {
            let key = obj.content+"#"+obj.uuid; 
            return !keys.includes(key) && keys.push(key); 
            })
            .map((row,index) => (
              <tr>
                <td>{index}</td>
                <td>{row.content}</td>
                <td>{row.senderUuid}</td>
                <td> <Moment date={row.sentAt}/> </td>
                <td><button>Delete Message</button></td> 
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }

export default MessageTable


