import * as React from 'react'
import logo from '../../assets/images/ikea.svg'
import { Container } from '@mui/material'
import { StyledNavbar, LogoWrapper, Image, NavbarContainer, WelcomingText } from './styles'

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container maxWidth='xl'>
        <NavbarContainer>
          <LogoWrapper>
            <Image src={logo} alt='Logo' />
          </LogoWrapper>
          <WelcomingText>WELCOME TO WAREHOUSE</WelcomingText>
        </NavbarContainer>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar
