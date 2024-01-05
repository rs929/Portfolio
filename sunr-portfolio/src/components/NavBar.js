import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle';
import { MdMenu } from 'react-icons/md'

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
                background-color: rgba(0, 0, 0, 0.1);
            }
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
`;


export default function NavBar() {
    return (
        <NavBarStyle>
            <a href="/">
                <img src='rslogo.svg'></img>
            </a>
            
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </NavBarStyle>
    )
}