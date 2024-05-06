import React, { useState } from 'react';

function App() {

  const [users, setusers] = useState([])
  const [username, setusername] = useState("")
  const [description, setdescription] = useState("")
  const [gender, setgender] = useState("male")
  const [num, setnum] = useState(1)
  const [accept, setaccept] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = { username, gender, description, num, accept }
    setusers([...users, newUser])
    setusername('')
    setdescription('')
    setgender('male')
    setnum(1)
    setaccept(false)
  }

  let userList = users.length > 0 ? users.map((user, index) => {
    return <div key={index}>
      <h1>{user.username}</h1>
      <span>{user.gender}</span>
    </div>
  }) : <h4>no user yet</h4>

  console.log(users)


  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input type="text" onChange={(e) => { setusername(e.target.value) }} value={username} /> <br />
      <input onChange={(e) => setgender(e.target.value)} value='male' checked={gender === 'male' ? true : false} type="radio" name="a" id="" /><label htmlFor="">male</label>
      <input onChange={(e) => setgender(e.target.value)} value='female' checked={gender === 'female' ? true : false} type="radio" name="a" id="" /><label htmlFor="">female</label> <br />
      <textarea name="" id="" cols="12" rows="2" onChange={(e) => { setdescription(e.target.value) }} value={description} placeholder='enter text'></textarea><br />
      <select value={num} onChange={(e) => setnum(e.target.value)} name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select><br />
      <button>submit</button>
      <input onChange={(e) => setaccept(e.target.checked)} checked={accept ? true : false} type="checkbox" name="" id="" /> <label htmlFor="">accept</label> <br />
      <hr />
      {userList}
    </form>


  );
}

export default App;
