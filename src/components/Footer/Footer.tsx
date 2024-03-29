import React from 'react';
import './footer.scss';
import {Link} from "react-router-dom";

interface IProps {
    size: number;
}
export const Footer = ({size} :IProps) => {
    return (
        <footer className='footer'>
            <div className='footer__buttons'>
                {size === 3 && <Link to='/bonus' className='footer__button'>Бонус</Link>}
                {size === 5 && <Link to='/' className='footer__button'>Оригинал</Link>}
                <Link to='/bonus' className='footer__button'>Правила</Link>
            </div>
        </footer>
    );
};

