import React, { useEffect, useState } from 'react'
import { generateRandomString } from '../../helpers/generateRandomString'
import './RandomCode.scoped.scss'
import CSS from 'csstype';


interface RandomCodeProps {
    length?: number;
    interval?: number;
    uppercase?: boolean;
    align?: CSS.Property.TextAlign | undefined;
    withBackground?: boolean;
}

const RandomCode = ({
    length = 10,
    interval = 1000,
    uppercase = false,
    align = 'unset',
    withBackground = false
}: RandomCodeProps) => {

    const [code, setCode] = useState(generateRandomString(length));

    useEffect(() => {
        const intervalRef = setInterval(() => {
            setCode(generateRandomString(length));
        }, interval);
        return () => {
            clearInterval(intervalRef)
        }
    }, [])

    return (
        <div style={{
            textAlign: align,
        }}>

            <span
                className={
                    withBackground ? 'withBackground' : ''
                }
                style={{
                    textTransform: uppercase ? 'uppercase' : 'unset',
                }}>{code}</span>
        </div>
    )
}

export default RandomCode
