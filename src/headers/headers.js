// import React, { useState } from 'react';
// import { useEffect } from 'react';


// function Header(props) {
//   const [smallScreen, setSmallScreen] = useState(false)

//   useEffect(() => {
//     window.addEventListener('resize', checkScreenSize)
//   }, []);

//   const checkScreenSize = () => {
//     setSmallScreen(window.innerWidth < 600);
//   }

//   return(
//     <div className={`${smallScreen ? "small" : "large"}`} id="header">
//       <h3>Header</h3>
//       {smallScreen ?
//       //class
//       <h3>Welcome small screen user</h3>
//       :
//       <h3> welcome large screen user</h3>
//       }
//     </div>
//   )
// }



// export default Header

import useSmallScreen from '../smallScreen/small-screen';

function Header(props) {
  const isScreenSmall = useSmallScreen();

  return (
    <div className={`${isScreenSmall ? "small" : "large"}`} id="header">
      <h3>Header</h3>
      {isScreenSmall ?
        //class
        <h3>Welcome small screen user</h3>
        :
        <h3> welcome large screen user</h3>
      }
    </div>
  )
}

export default Header