import React from 'react'
import { Button } from '@mui/material';
import { auth } from '../../firebase';
import './SignOut.css';

const SignOut = () => {
  return (
    <div className='signout shadow-sm'>
        <div className='container d-flex justify-content-center'>
            <div className='row'>
                <div className='col-12'>
                    <Button className='signout-btn'
                    onClick={()=>auth.signOut()}
                    >Log Out</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default SignOut;
