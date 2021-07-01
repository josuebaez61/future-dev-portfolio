import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import RandomCode from '../RandomCode/RandomCode'

const LoadingCard = () => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const dotsInterval = setInterval(() => {
            setDots(dots => dots + '.');
        }, 600);
        return () => {
            clearInterval(dotsInterval);
        }
    }, []);

    useEffect(() => {
        if ( dots.length > 3) {
            setDots('');
        }
    }, [dots]);
    return (
        <article className="card mt-2">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <h3>Loading{ dots }</h3>
                        <RandomCode interval={ 300 } length={ 30 } uppercase/>
                    </div>
                    <FontAwesomeIcon size="2x" spin icon={ faCompactDisc }/>
                </div>
            </div>
        </article>
    )
}

export default LoadingCard
