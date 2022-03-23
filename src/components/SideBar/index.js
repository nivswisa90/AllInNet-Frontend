import React, { useState } from 'react'
import { SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute 
} from './SidebarElements';
import {
    homeObjFour,
    homeObjTwo,
    homeObjThree,
    homeObjOne
 } from '../MainSection/Data'
// import styled from 'styled-components';

const Sidebar = ({isOpen, toggle}) => {
    //const [setOpen] = useState(false)
   
  return (
    <SidebarContainer isOpen = {isOpen} onClick ={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='main'
                 onClick={toggle }>Main</SidebarLink>
                <SidebarLink to="search" onClick={toggle } >Search</SidebarLink>
                <SidebarLink to="events" onClick={toggle}>Events</SidebarLink>
                <SidebarLink to="profile" onClick={toggle}>Profile</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to = "/signin"> Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
