import React from 'react'
// import { a } from 'react-router-dom';
export default function Navbar(props) {
  const getNavbarStyle = () => {
    if(props.mode === 'blue') return { backgroundColor: '#1a1d45ff', color: 'white' };
    if(props.mode === 'red') return { backgroundColor: '#3d1717ff', color: 'white' };
    return {};
  }

  
  return (
 <nav className={`navbar navbar-expand ${props.mode} bg-${props.mode}`} style={getNavbarStyle()}>
  <div className="container-fluid">
    <a className="navbar-brand" href="" style={(props.mode === 'blue' || props.mode === 'dark' || props.mode === 'red') ? {color: 'white'} : {}}>{props.title}</a>
    <div className=" navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="/" style={(props.mode === 'blue' || props.mode === 'red') ? {color: 'white'} : {}}>Home</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-a" href="*" style={(props.mode === 'blue' || props.mode === 'red') ? {color: 'white'} : {}}>About</a>
        </li> */}
      </ul>
    </div>
    <form className="d-flex" role="search"> 
      <div className={`form-check form-switch`} style={{color: props.mode==='light' ? 'black' : 'white'}}>
     <input className="form-check-input mx-2" onClick={props.darkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
     <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
     </div>
     <div className={`form-check form-switch`} style={{color: (props.mode==='light') ? 'black' : 'white'}}>
     <input className="form-check-input mx-2" onClick={props.blueMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
     <label className="form-check-label" for="flexSwitchCheckDefault">Blue Theme</label>
     </div>
     <div className={`form-check form-switch`} style={{color: (props.mode==='light') ? 'black' : 'white'}}>
     <input className="form-check-input mx-2" onClick={props.redMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
     <label className="form-check-label" for="flexSwitchCheckDefault">Red Theme</label>
     </div>


      
    </form>
  </div>
</nav>
  )
}
