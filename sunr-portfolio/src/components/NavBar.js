import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle';
import { MdClose, MdMenu } from 'react-icons/md'

const NavBarStyle = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    display: flex;

    img {
        width: 50px;
        height: auto;
        margin: 0 auto;
    }

    ul {
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: right;

        li {
            display: inline-block;
            border-radius: 10px;
            transition: .5s ease background-color;
            &:hover {
                background-color: var(--hover);
            }
        }

        a {
            display: inline-block;
            font-family: 'Georgia';
            padding: 1rem 1rem;
            font-size: 1.5rem;
            color: var(--offblack);
            outline: none;
        }

        .active {
            color: var(--purple);
        }
    }

    .mobile-menu-icon {
        position: absolute;
        right: 1rem;
        top: 2rem;
        width: 2rem;
        margin: 0 auto;
        cursor: pointer;
        outline: none;
        display: none;
    }

    .close-menu-icon {
        display: none;
    }

    @media only screen and (max-width: 770px) {
        .mobile-menu-icon {
            display: block;
        }

        .hide-items { 
            transform: translateX(150%);
        }

        .nav-items {
            transition: .5s ease transform;
            background-color: white;
            outline: auto;
            outline-color: var(--purple);
            padding: 1rem;
            width: 35%;
            max-width: 300px;
            border-radius: 10px;
            position: absolute;
            right: 1rem;
            top: 1rem;

            .close-menu-icon {
                display: block;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor: pointer;

                * {
                    pointer-events: none;
                }
            }

            li {
                display: block;
                margin-bottom: 1rem;
                text-align: center;
            }
        }

        

    }
`;


export default function NavBar() {
    const [showNav, SetShowNav] = useState(false )

    return (
        <NavBarStyle>
            <a href="/">
                <img src='rslogo.svg'></img>
            </a>

            <div className={showNav ? 'mobile-menu-icon hide-items' : 'mobile-menu-icon'} onClick = {() => SetShowNav(!showNav)} role='button' onKeyDown={()=>SetShowNav(!showNav)} tabIndex={0}>
                <MdMenu />
            </div>
            
            <ul className={!showNav ? 'nav-items hide-items' : 'nav-items'}>
                <div className='close-menu-icon' onClick = {() => SetShowNav(!showNav)} role='button' onKeyDown={()=>SetShowNav(!showNav)} tabIndex={0}>
                    <MdClose />
                </div>
                <li>
                    <NavLink to="/" exact onClick = {() => SetShowNav(!showNav)} role='button' onKeyDown={()=>SetShowNav(!showNav)} tabIndex={0}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick = {() => SetShowNav(!showNav)} role='button' onKeyDown={()=>SetShowNav(!showNav)} tabIndex={0}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" onClick = {() => SetShowNav(!showNav)} role='button' onKeyDown={()=>SetShowNav(!showNav)} tabIndex={0}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick = {() => SetShowNav(!showNav)} role='button' onKeyDown={()=>SetShowNav(!showNav)} tabIndex={0}>Contact</NavLink>
                </li>
            </ul>
        </NavBarStyle>
    )
}