import React, { useState } from 'react';

function App() {
  const [username,setUsername]= useState('')
  const [email,setEmail]= useState('')

  const eventHandler = (event,username,email)=>{
    event.preventDefault()
    console.log(username)
    console.log(email)
  }
  

  return (
    <form onSubmit={(e)=>eventHandler(e,username,email)}>
      <input onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" name="username" placeholder='username' />
      <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" name="email" placeholder='email' />
      <button>submit</button>
    </form>
  );
}

export default App;
