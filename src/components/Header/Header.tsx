import React from 'react';
import logo from '@/assets/images/logo.svg'
import './header.scss';
import {Counter} from "@/components/Counter/Counter";

export const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt='logo' className='header__logo' />
            <Counter />
        </header>
    );
};