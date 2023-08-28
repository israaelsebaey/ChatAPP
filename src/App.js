import React from "react";
import { auth } from "./firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import SignIn from "./components/SignIn/SignIn";
import Chat from "./components/Chat/Chat";

function App() {
 const [user]=useAuthState(auth);
 return(
  <div>
     {user? <Chat/>:<SignIn/>}
  </div>
 )
}
export default App;
