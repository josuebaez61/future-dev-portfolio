import React from 'react'
import ErrorCard from '../../components/ErrorCard/ErrorCard';
import LoadingCard from '../../components/LoadingCard.tsx/LoadingCard';
import { useProjects } from '../../hooks/useProjects'

const Projects = () => {
    const { projects, isLoading, error } = useProjects();
    return (
        <main className="container pb-3 pt-3">
            <div className="row gy-4">
                <div className="col-12">
                    <h2 className="animate__animated animate__slideInLeft">PROYECTOS</h2>
                    <p className="animate__animated animate__slideInLeft">
                        Estos son mis proyectos personales que he desarrollado a lo largo de mi formación como desarrollador.
                    </p>
                </div>
                <div className="col-12 animate__animated animate__zoomIn animate__faster">
                    {
                        isLoading
                            ? <LoadingCard />
                            : (!error) &&
                            <section className="row row-cols-1 row-cols-md-3 g-4">
                                {
                                    projects.map(project => (
                                        <article key={project.id} className="col">
                                            <div className="card" style={{ minHeight: "450px" }}>
                                                <img src={project.image} className="card-img-top" alt={ project.title } />
                                                <div className="card-body">
                                                    <h5 className="card-title">{project.title}</h5>
                                                    <p className="card-text">
                                                        {project.description}
                                                    </p>
                                                </div>
                                                <div className="card-footer">
                                                    <div className="d-grid">
                                                        <button
                                                            onClick={() => window.open(project.url, '_blank')}
                                                            className="btn-cyber btn-cyber-skyblue">
                                                            VER
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    ))
                                }
                            </section>
                    }
                    {
                        !isLoading && error && <div className="animate__animated animate__zoomIn animate__faster"><ErrorCard /></div>
                    }
                </div>
            </div>
        </main>
    )
}

export default Projects
