import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import {
    MobileIcon,
    MyImage,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu
} from './NavBarElements';
//import {useHistory} from "react-router-dom";
import {IconContext} from 'react-icons/lib';
import img from '../../media/images/All-In-Net-Icon.ico';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    // const history = useHistory();

    // const routeChange = () => {
    //     let path = '/'
    //     history.push(path);
    // }

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <MyImage background={img} onClick={toggleHome}/>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='main'
                                          smooth="true"
                                          duration={500}
                                    //spy={true}
                                          exact='true'
                                          offset={-80}
                                >Main</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='search'
                                          smooth="true"
                                          duration={500}
                                    //spy={true}
                                          exact='true'
                                          offset={-80}
                                >Search</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='events'
                                          smooth="true"
                                          duration={500}
                                    //spy={true}
                                          exact='true'
                                          offset={-80}
                                >Events</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='profile'
                                          smooth="true"
                                          duration={500}
                                    //spy={true}
                                          exact='true'
                                          offset={-80}
                                >Profile</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/signin'
                                        smooth="true"
                                        duration={500}
                                //spy={true}
                                        exact='true'
                                        offset={-80}
                            > Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;