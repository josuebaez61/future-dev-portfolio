import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useGithub } from '../../hooks/useGithub'
import RandomCode from '../../components/RandomCode/RandomCode'

const GithubCard = () => {
    const { accountData, isLoading, error } = useGithub()
    return (
        <article className="card gh-card">
            <div className="card-body">
                <div className="text-center mb-3">
                    <FontAwesomeIcon size="4x" icon={faGithub} />
                </div>
                <div>
                    {
                        isLoading
                            ? <RandomCode interval={500} uppercase />
                            :
                            (
                                error
                                    ? 'FETCH_DATA_ERROR'
                                    : accountData &&
                                    < >
                                        <div className="mb-3">
                                            <p className="card-text m-0"><b>id: </b>{accountData.id}</p>
                                            <p className="card-text m-0"><b>name: </b>{accountData.name}</p>
                                            <p className="card-text m-0"><b>followers: </b>{accountData.followers}</p>
                                            <p className="card-text m-0"><b>location: </b>{accountData.location}</p>
                                            <p className="card-text m-0"><b>public_repos: </b>{accountData.public_repos}</p>
                                            <p className="card-text m-0"><b>created_at: </b>{accountData.created_at}</p>
                                            <p className="card-text m-0"><b>url: </b>{accountData.html_url}</p>
                                        </div>
                                        <div className="d-grid">
                                            <button
                                                onClick={() => window.open(accountData.html_url, '_blank')}
                                                className="btn-cyber btn-cyber-green">
                                                VIEW PROFILE
                                            </button>
                                        </div>
                                    </>
                            )
                    }
                </div>
            </div>
        </article>
    )
}

export default GithubCard
