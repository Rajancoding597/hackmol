import React from 'react'
import { NavLink } from 'react-router-dom'
function fun() {
    return (
        <>
            {/* <NavLink to='/' exact="true" className={(navData) => (navData.isActive ? 'nav-links-active' : 'nav-links')} >
            home
        </NavLink> */}
            <div>
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
            </div>

        </>
    )
}

export default fun;