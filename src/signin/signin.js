import React, { useContext, useState } from 'react';
import { LoginContext } from '../signup/signup';
import Auth from '../auth/auth';

function Login(props) {
  const [username, setUsername] = useState('');//create a little bit of state
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const loginContext = useContext(LoginContext);//use some context with the context received from context component

  const handleSubmit = e => {
    e.preventDefault();//prevent the default event
    loginContext.login(username, password, email);//log the user in not sure how its happening
  }

  const handleNameChange = e => {
    setUsername(e.target.value);//set the state with the value input from form
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value);//set the state with the valuev input from form
  }

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  const EditLink = props => {
    return (
      <Auth capability="update">
        <button>edit</button>
      </Auth>
    );
  };
  
  const DeleteLink = props => {
    return (
      <Auth capability="delete">
        <button>delete</button>
      </Auth>
    );
  };
  

  return(
    <form onSubmit={handleSubmit}>
      <input onChange={handleNameChange} type="text" name="name" />
      <input onChange={handlePasswordChange} type="password" name="password" />
      <input onChange={handleEmailChange} type="email" name="email" />
      <button>Sign in</button>
      
    </form>
  )
}



export default Login