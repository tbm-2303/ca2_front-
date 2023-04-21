import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'

const Navbar = ({user, loggedIn, logout}) => {
    return (
        <>
        <div className='navbar'>
            <PrimaryNav >
                <Hamburger/>
                <Menu>
                    <MenuLink to="/test" ativestyle="true">
                        Test
                    </MenuLink>
                    <MenuLink to="/" ativestyle="true">
                        Home
                    </MenuLink>
                    <MenuLink to="/about" ativestyle="true">
                        About
                    </MenuLink>
                    <MenuLink to="/joke" ativestyle="true">
                        Joke
                    </MenuLink>
                    <MenuLink to="/quiz" ativestyle="true">
                        Quiz
                    </MenuLink>
                    {loggedIn ? (<MenuLink to="/" ativestyle="true" onClick={logout}> Logout </MenuLink> ) : (<MenuLink to="/login" ativestyle="true"> Login </MenuLink>)}  
                </Menu>
            </PrimaryNav>
        </div>
        </>
  )
}
export default Navbar