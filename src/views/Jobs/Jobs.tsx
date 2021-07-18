import React from 'react'
import ErrorCard from '../../components/ErrorCard/ErrorCard';
import LoadingCard from '../../components/LoadingCard.tsx/LoadingCard';
import { useJobs } from '../../hooks/useJobs'

const Jobs = () => {
    const { jobs, isLoading, error } = useJobs();
    return (
        <main className="container pb-3 pt-3">
            {
                isLoading
                    ? <LoadingCard />
                    :
                    (
                        error
                        ? <ErrorCard/>
                        :
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                            jobs.map(job =>
                                <div className="col animate__animated animate__zoomIn animate__faster">
                                    <div className="card mb-3" >
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={job.image} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{job.title} / <small>{job.role}</small></h5>
                                                    <p className="card-text">{job.description}</p>
                                                    <p className="card-text">
                                                        {job.techs.map((tech, index) =>
                                                            <span className={
                                                                `badge rounded-pill bg-skyblue ${(index !== (job.techs.length - 1)) ? 'mx-1' : 'ms-1'}`
                                                            }>
                                                                {tech}
                                                            </span>)
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        </div>
                    )
            }

        </main>
    )
}

export default Jobs
