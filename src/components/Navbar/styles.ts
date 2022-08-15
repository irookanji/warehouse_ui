import styled from 'styled-components'
import { Box, Typography, Toolbar } from '@mui/material'

export const StyledNavbar = styled(Box)`
  background-color: white;
  margin-bottom: 2rem;
  position: static;
`
export const NavbarContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoWrapper = styled(Box)`
  display: flex;
  filter: grayscale(0%);
  transition: filter 300ms;
  &:is(:hover, :focus) {
    filter: grayscale(100%);
  }
`
export const Image = styled.img`
  width: 120px;
`
export const WelcomingText = styled(Typography)`
  display: flex;
  font-family: monospace;
  font-size: 1.3rem;
  line-height: 1.6;
  font-weight: 700;
  letter-spacing: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
  text-decoration: none;
  white-space: nowrap;

  @media (max-width: 850px) {
    flex-grow: 1;
    font-size: 0.9rem;
    line-height: 1;
    white-space: normal;
  }
`
