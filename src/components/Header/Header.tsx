import React from 'react';
import logo from '@/assets/images/logo.svg'
import logoBonus from '@/assets/images/logo-bonus.svg'
import './header.scss';
import {Counter} from "@/components/Counter/Counter";

interface IProps {
    counterValue: number;
    size: number;
}
export const Header = ({counterValue, size}: IProps) => {
    return (
        <header className='header'>
            <img
                src={ size === 5 ? logoBonus : logo}
                alt='logo'
                className='header__logo' />
            <Counter counterValue={counterValue} />
        </header>
    );
};