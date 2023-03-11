import { useState } from "react";
import './Navbar.css';
import logo from '../../assets/images/logo.svg'

const Navbar = ()=>{
    const[select, setSelect] = useState(0)
    return(
        <nav id="navbar">
            <img className='logo' src={logo} alt='logo'/>
            <ul>
                <div className="menu">
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>New</a></li>
                    <li><a href='#'>Popular</a></li>
                    <li><a href='#'>Training</a></li>
                    <li><a href='#'>Categories</a></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;