import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from '../../firebase';
import { Button } from '@mui/material';

const SignIn = () => {
 const signInWithGoogle=()=>{
    const provider= new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
 }
  return (
    <div className='signin mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
                    <Button variant='contained' onClick={signInWithGoogle}
                    >sign in with google</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default SignIn;
