import React from 'react';
import logo from '@/assets/images/logo.svg'
import './header.scss';
import {Counter} from "@/components/Counter/Counter";

interface IProps {
    counterValue: number;
}
export const Header = ({counterValue}: IProps) => {
    return (
        <header className='header'>
            <img src={logo} alt='logo' className='header__logo' />
            <Counter counterValue={counterValue} />
        </header>
    );
};