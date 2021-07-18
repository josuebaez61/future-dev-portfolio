import { faBug } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ErrorCard = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon size="4x" icon={faBug}/>
                    <h4 className="mt-3">...OPS! Algo salió mal.</h4>
                </div>
            </div>
        </div>
    )
}

export default ErrorCard
