import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

/* 
ex padding del nav
padding: 0.5rem calc((100% - 1000px) / 2);
     */
export const Blur = styled.div`
  background: rgb(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 2;
`

export const Nav = styled.nav`
  background: #06283d;
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0% 4%;

  .links {
    position: absolute;
    background: rgb(229, 229, 229);
    z-index: 3;
    top: -900px;
    left: 0px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 1.5s ease;

    a {
      color: #000;
      font-size: 2rem;
      display: block;
      padding: 32px 0px;
      transition: none;
    }

    @media (min-width: 768px) {
      opacity: 0;
      position: initial;
      margin: 0;
      display: none;
      a {
        color: #000;
      }
    }
  }

  .links.active {
    opacity: 100%;
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 14%;
    left: 0;
    right: 0;
    text-align: center;
    .Mobile.active {
      font-size: 2rem;
      margin-top: 1rem;
      color: #15cdfc;
    }
  }
`

export const NavLink = styled(Link)`
  display: block;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 24px 1px;
  font-size: 30px;
  font-family: sans-serif;

  transition: all 0.6;
  margin: 0px 20px;

  cursor: pointer;
  &:not(hover) {
    opacity: 0.4;
  }

  &.active {
    color: #15cdfc;
  }
  &:hover {
    background: #dff6ffe2;
    color: #01143d;
    opacity: 1;
    outline: transparent;
    border: 2px solid #fff;
    padding: 24px 10px;
    transition: background-color 0.8s, color 0s, padding 0.8s;
  }
`

export const Bars = styled.div`
  z-index: 3;
  display: none;

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    margin-top: 25px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    span {
      background-color: #fff;
      position: absolute;
      border-radius: 2px;
      transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      width: 100%;
      height: 4px;
      transition-duration: 500ms;
    }
    span:nth-child(1) {
      top: 0px;
      left: 0px;
    }
    span:nth-child(2) {
      top: 13px;
      left: 0px;
      opacity: 1;
    }
    span:nth-child(3) {
      bottom: 0px;
      left: 0px;
    }
    :not(#open):hover span:nth-child(1) {
      transform: scaleX(0.8);
    }
    :not(#open):hover span:nth-child(2) {
      transform: scaleX(0.5);
    }
    :not(#open):hover span:nth-child(3) {
      transform: scaleX(0.8);
    }
    &#open span:nth-child(1) {
      transform: rotate(45deg);
      top: 13px;
    }
    &#open span:nth-child(2) {
      opacity: 0;
    }
    &#open span:nth-child(3) {
      transform: rotate(-45deg);
      top: 13px;
    }
  }
`

export const NavLinkLogo = styled(Link)`
  color: #f3efef;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:not(hover) {
    opacity: 1;
  }

  &:hover {
    //background: rgba(255, 255, 255, .4);
    //border-radius: 4px;
    //outline: none;
    //border: none;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    display: none;
    flex-direction: column;
  }

  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: row;
  }
`
