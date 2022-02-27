import React from 'react'
import { NavLink } from 'react-router-dom'
function Testing() {
    return (
        <>
            {/* <NavLink to='/' exact="true" className={(navData) => (navData.isActive ? 'nav-links-active' : 'nav-links')} >
                home
            </NavLink> */}
            <button>
                <NavLink to='/login' exact="true" className={(navData) => (navData.isActive ? 'btn' : 'none')}>
                    login
                </NavLink>
            </button>
            <button>
                <NavLink to="/signup" exact="true" className={(navData) => (navData.isActive ? 'btn' : 'none')}>
                    signup
                </NavLink>
            </button>

        </>
    )
}

export default Testing