import React from 'react';
import {Link, useNavigate} from 'react-router-dom'

const Nav=()=>{
    const auth=localStorage.getItem("user");
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return (
       <div>
        <img alt="logo" className='img-logo' src="data:image/png;base64,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" />
        {
            auth?<ul className='nav-ul'>
            <li> <Link to="/">Product </Link></li>
            <li> <Link to="/add">Add Product </Link></li>
            <li> <Link to="/update">Update Product </Link></li>
            <li> <Link to="/profile">Profile</Link></li>
            <li><Link  onClick={logout}>({JSON.parse(auth).name}) Logout</Link></li>
            

        </ul>:
    <ul className='nav-ul nav-right'>  
    <li><Link to="/signup">Signup</Link></li>
    <li><Link to="/login">Login</Link>  </li>
    </ul>
}
        
        
       </div>
    )
}
export default Nav;

