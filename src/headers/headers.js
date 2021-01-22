import Signup from '../signup/signup';
import Login from '../signin/signin';
import Auth from '../auth/auth';
import useSmallScreen from '../smallScreen/small-screen';

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



function Header(props) {
  const isScreenSmall = useSmallScreen();
  
  return (
    <div className={`${isScreenSmall ? "small" : "large"}`} id="header">
      <h3>Header</h3>
      {isScreenSmall ?
        
        <h3>Welcome small screen user</h3>
        :
        <h3> welcome large screen user</h3>
      }
      <Signup>
        <Login />
        
      </Signup>
    </div>
  )
}

export default Header