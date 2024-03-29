import React, {useEffect, useState} from 'react';
import {allSignsClassic, SignType} from "@/components/Sign/types";
import {ClassicRPS} from "@/components/ClassicRPS/ClassicRPS";
import {Result} from "@/components/Result/Result";
import {getLocalStorage, setLocalStorage} from "@/lib/localStorage";
import {Header} from "@/components/Header/Header";
import {compareResults} from "@/lib/compareResults";
import {Footer} from "@/components/Footer/Footer";
import {BonusRPS} from "@/components/BonusRPS/BonusRPS";

interface IProps {
    size: number;
}

export const HomePage = ({size}: IProps) => {
    const [userResult, setUserResult] = useState<SignType>(null);
    const [compResult, setCompResult] = useState<SignType>(null);
    const [counterValue, setCounterValue] = useState(getLocalStorage(size));

    useEffect(() => {
        setCounterValue(getLocalStorage(size));
        setUserResult(null);
    }, [size]);

    const onClickHandler = (sign: SignType) => {
        setTimeout(() => {
            setUserResult(sign);
            const compValue = Math.floor(Math.random() * size) + 1;
            setCompResult(allSignsClassic[compValue]);
            const changeValue = compareResults(sign.id, allSignsClassic[compValue].id, size).value;
            setCounterValue(counterValue + changeValue);
        }, 500);
    }

    useEffect(() => {
        setLocalStorage(size, counterValue);
    }, [counterValue]);

    const resetHandler = () => {
        setUserResult(null);
        setCompResult(null);
    }


    return (
        <>
            <Header counterValue={counterValue} size={size}/>
            <section>
                {size === 3 && userResult === null ?
                    <ClassicRPS
                        onClick={onClickHandler}
                    /> :
                    size === 5 && userResult === null ?
                        <BonusRPS
                            onClick={onClickHandler}
                        /> :
                        <Result
                            userSign={userResult}
                            compSign={compResult}
                            onClick={resetHandler}
                            setCounter={setCounterValue}
                            size={size}
                        />
                }
            </section>
            <Footer size={size}/>
        </>

    );
};

