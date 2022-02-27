import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className='Navbar'>
                <div className='navbar-container'>
                    {/* <NavLink to='/' exact="true" className='title'> */}
                    <h1 className='title'>Klean</h1>
                    {/* </NavLink> */}
                </div>
            </nav>
        </>
    )
}

export default NavBar


/*
create-react-app hackmol
cd hackmol
npm i react-router-dom react-icons axios
*/