import React, { useEffect, useState } from 'react'

interface BsProgressBarProps {
    value: number;
}

const BsProgressBar = ({ value }: BsProgressBarProps) => {
    const [internalValue, setInternalValue] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setInternalValue(value);
        }, 100);
    }, [value]);

    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ "width": `${internalValue}%` }} aria-valuenow={internalValue} aria-valuemin={0} aria-valuemax={100}>{internalValue}%</div>
        </div>
    )
}

export default BsProgressBar
