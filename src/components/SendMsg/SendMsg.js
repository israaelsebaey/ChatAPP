import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { Input,Button } from '@mui/material';
import { auth, db } from '../../firebase';
import './SendMsg.css';

const SendMsg = ({scroll}) => {
  const [msg,setMsg]=useState('');  
  const sendMessage=async(e)=>{
      e.preventDefault();
      const {uid,photoURL}=auth.currentUser;
      await db.collection('messages').add({
        text:msg,
        uid,
        photoURL,
        createdAt:firebase.firestore.FieldValue.serverTimestamp()
      })
      setMsg('');
      scroll.current.scrollIntoView({behavior:'smooth'})
  }
  return (
    <div className='send-msg border'>
      <div className='container-md'>
        <div className='row'>
            <div className='col-12'>
               <form onSubmit={sendMessage}>
                 <Input placeholder='Send Message....' type='text'
                 onChange={(e)=>setMsg(e.target.value)} value={msg} className='inpt'
                 />
                 <Button type='submit' className='send-btn'>Send</Button>
               </form>
            </div>
        </div>
      </div>      
    </div>
  )
}
export default SendMsg;
