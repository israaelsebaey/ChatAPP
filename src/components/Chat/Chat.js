import React, { useEffect, useRef, useState } from 'react';
import { auth, db } from '../../firebase';
import SignOut from '../SignOut/SignOut';
import SendMsg from '../SendMsg/SendMsg';
import './Chat.css';

const Chat = () => {
  const scroll=useRef(null);
  const [messages,setMessages]=useState([]);
  useEffect(()=>{
    db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>doc.data()));
    })
  },[])
  return (
    <div className='chat'>
      <SignOut/>
      <div className='container-md'>
        <div className='row'>
          <div className='col-12'>
            <div className='chat-content'>
              {messages.map(({id,text,photoURL,uid})=>{
                 return(
                  <div className='chat-data'>
                      <div key={id} className={`all d-flex my-3 ${uid==auth.currentUser.uid? 'sent':'recived'}`}>
                        <img src={photoURL}/>
                        <p className={`text mx-2 ${uid==auth.currentUser.uid? 'text-white':'text-dark'}`}>{text}</p>
                      </div>
                  </div>
                 )
              })}
            </div>
          </div>
        </div>
      </div>
      <SendMsg scroll={scroll}/>
      <div ref={scroll} style={{marginBottom:'100px'}}></div>
    </div>
  )
}
export default Chat;
