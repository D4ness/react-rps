import React from 'react';
import './sign.scss';
import {SignType} from "@/components/Sign/types";


interface IProps {
    sign: SignType;
}

export const SignComponent = ({sign}: IProps) => {
    return (
        <div className='sign' style={{borderColor: sign.color}}>
            <img src={sign.icon} alt=''/>
        </div>
    );
};