import React, { useState } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const API = process.env.REACT_APP_API

export const LoginContext = React.createContext();

function LoginProvider(props) {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async (username, password, email) => {
    console.log(`login top ${username} ${password} ${email}`)
    await fetch(`${API}/signin`, {
      method: 'post',
      mode: 'cors',
      headers: new Headers({
        'Authorization': `Basic ${btoa(`${username}:${password}`)}`
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(user => {
        console.log('user', user);
        validateToken(user.token)
        setUser(user)
      })
  }

  const validateToken = (token) => {
    try {
      let user = jwt.verify(token, process.env.REACT_APP_SECRET);
      setLogInState(true, token, user);
    }
    catch {
      setLogInState(false, null, {});
    }
  }

  const setLogInState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setLoggedIn(true);
    setUser(user);
  }

  const state = {
    user: user,
    loggedIn: loggedIn,
    login: login
  }
console.log(state);
  return(
    <LoginContext.Provider value={state}>
      <div>{props.children}</div>
    </LoginContext.Provider>
  )
}

export default LoginProvider;

// post to /signin
    // need our API url
    // a library or fetch
    // our backend is expecting us to send our username and password encoded in the headers
    // some sort of function to update username and password

    // state
      // need an updateUserName(username)
      // need an updatePassword(password)

  // we should be getting back a token with a user object from the backend