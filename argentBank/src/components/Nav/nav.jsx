import React from 'react';
import Logo from "../../assets/argentBankLogo";

const logConnect =() => {

}

return(
    <nav className='main-nav'>
        <Link className="main-nav-logo "to="/">
            <img className='main-nav-logo-image' src={Logo} alt="logo ArgentBank"/>
            <h1 className='sr-only'>ArgentBank</h1>
        </Link>
        
        <div onClick={logConnect}>
              <i className="fa fa-user-circle"></i>
              Sign Out
        </div>
       
    </nav>
)