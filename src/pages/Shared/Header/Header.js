import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
      logOut()
      .then()
      .catch(err=>console.error(err))
    }

    const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/servicesDetails'>Services</Link></li>
    <li><Link to='/'>Contact</Link></li>
    {
      user?.email?
        <>
       <li><Link to='/review'> My reviews</Link></li>
       <li><Link to='/addService'>Add Service</Link></li>
       <li><Link to='/'><button onClick={handleLogOut}> Log Out</button></Link></li>
        </>
       :
       <li> <Link to='/login'> Login </Link> </li> 
      
    }
    
    </>

    return (
        <div className="navbar py-4 text-sky-900 font-semibold font-lg bg-sky-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn bg-sky-50 text-sky-900">Get started</Link>
  </div>
</div>
    );
};

export default Header;