import React, { useEffect, useState, useContext } from 'react'
import LoginContext from '../signup/signup';

function Auth(props) {
  const [okToRender, setOkToRender] = useState(false);

  const loginContext = useContext(LoginContext);

  useEffect(() => {
    console.log('loginContext', loginContext)
    setOkToRender(
      LoginContext.loggedIn && (props.capability ? LoginContext.user.capabilities.includes(props.capability) : false)
    )
  }, [LoginContext, props.capability])

  console.log(okToRender, LoginContext.loggedIn);

  return(
    okToRender &&
    <div>{props.children}</div>
  )
}

export default Auth;