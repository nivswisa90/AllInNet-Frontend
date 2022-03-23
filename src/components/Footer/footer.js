import React from 'react';
import { 
    FaFacebook,
    FaInstagram, 
    FaYoutube,
    FaLinkedin
} from 'react-icons/fa';
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    WebsiteRights,
    SocialIconLink,
} from './FooterElements';
import { MyImage } from '../NavBar/NavBarElements';
import img from '../../media/images/All-In-Net-Icon.ico';
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Company</FooterLinkTitle>
                            <FooterLink to="/trainingResult">About us </FooterLink>
                            <FooterLink to="/systemTrainingProgram">Collaboration</FooterLink>
                            <FooterLink to="/signin">Contact</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>How it works</FooterLinkTitle>
                            <FooterLink to="/signin">Overview </FooterLink>
                            <FooterLink to="/signin">Pricing</FooterLink>
                            <FooterLink to="/signin">Service Areas</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Why All In Net</FooterLinkTitle>
                            <FooterLink to='/signin'>For Improve </FooterLink>
                            <FooterLink to='/signin'>For fun</FooterLink>
                            <FooterLink to='/signin'>For Coaches</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social</FooterLinkTitle>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>Linkdin</FooterLink>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>Youtube</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <MyImage background={img} onClick={toggleHome}/>
                    </SocialLogo>
                    <WebsiteRights>All In Net © {new Date().getFullYear()}   
                      All rights reserved. </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Youtube">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href="//www.facebook.com/dana.d.aloni/" target="_blank" 
                        aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" 
                        aria-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>
                        
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;