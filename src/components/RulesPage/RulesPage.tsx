import React from 'react';
import './rules.scss';
import rules from '@/assets/images/image-rules.svg';
import rulesBonus from '@/assets/images/image-rules-bonus.svg';
import {Link} from "react-router-dom";

export const RulesPage = () => {
    return (
        <section className='rules'>
            <div className='rules__title'>Правила</div>
            <div className='rules__container'>
                <div className='rule'>
                    <div className='rule__title'>Оригинал</div>
                    <img className='rule__img' src={rules} alt='Правила'/>
                </div>
                <div className='rule'>
                    <div className='rule__title'>Бонус</div>
                    <img className='rule__img' src={rulesBonus} alt='Правила для бонусного режима'/>
                </div>
            </div>
            <Link to='/' className='rules__link'>Играть</Link>
        </section>
    );
};