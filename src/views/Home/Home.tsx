import React, { useEffect } from 'react'
import profilePicture from '~/assets/images/glitch-1.gif'
import BsProgressBar from '../../components/BsProgressBar/BsProgressBar'
import { CertificatesCarousel } from '../../components/CertificatesCarousel/CertificatesCarousel'
import RandomCode from '../../components/RandomCode/RandomCode'
import SkillsProgressBars from '../../components/SkillsProgressBars/SkillsProgressBars'
import SkillsRadarChart from '../../components/SkillsRadarChart/SkillsRadarChart'
import { useSkills } from '../../hooks/useSkills'
const Home = () => {
    return (
        <div className="container pt-3 pb-3">
            <div className="row gy-3">
                <aside className="col-12 col-md-3 animate__animated animate__slideInLeft animate__faster">
                    <div className="card">
                        <img src={profilePicture} className="card-img-top" alt="profile-picture" />
                        <div className="card-body">
                            <pre>
                                {
                                    JSON.stringify({
                                        full_name: 'Josué Baez',
                                        email: 'josuebaez61@gmail.com',
                                        role: 'Web Developer',
                                        location: 'Buenos Aires, Arg.'
                                    }, null, 2)
                                }
                            </pre>
                        </div>
                    </div>
                </aside>
                <main className="col-12 col-md-9">
                    <div className="row gy-3">
                        <div className="col-12">
                            <div className="card card--cut-bottom-right card--radius-top-left animate__animated animate__zoomIn animate__faster">
                                <div className="card-header">PROFILE_DESCRIPTION</div>
                                <div className="card-body">
                                    <h5 className="card-title">¡Hola! Soy Josué, Desarrollador Web Full Stack.</h5>
                                    <p>A mis 25 años encontré una maravillosa pasión por el desarrollo de software. Desde entonces fuí incorporando muchisimo conocimiento para cumplir lo que me habia propuesto, convertirme en desarrollador web. 🚀🚀</p>
                                    <p>Actualmente vivo en Buenos Aires, Argentina. Tengo un gusto musical variado, desde el folklore nórdico a la música electrónica, y de esta al rock de los 60's - 80's. 🕺 Me gustan las series históricas, los documentales, la ciencia, la economía y la política.</p>
                                    <p>Me interesan los desafios y trabajar con gente positiva.</p>
                                    <p>El futuro es ahora.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 animate__animated animate__zoomIn animate__faster">
                            <RandomCode uppercase length={20} />
                            <RandomCode uppercase length={30} />
                            <RandomCode uppercase length={15} />
                        </div>
                        <div className="col-6 animate__animated animate__zoomIn animate__faster">
                            <RandomCode withBackground align="right" uppercase length={20} />
                            <RandomCode align="right" uppercase length={30} />
                            <RandomCode align="right" uppercase length={15} />
                        </div>
                        <div className="col-12 animate__animated animate__zoomIn animate__faster">
                            <CertificatesCarousel />
                        </div>
                        <div className="col-12 col-md-6 slide-right animate__animated animate__zoomIn animate__faster">
                            <div className="card card--cut-bottom-left">
                                <header className="card-header">
                                    SKILLS_CHART
                                </header>
                                <div className="card-body">
                                    <SkillsRadarChart />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 animate__animated animate__zoomIn animate__faster">
                            <div className="card">
                                <header className="card-header">
                                    SKILLS_PROGRESS
                                </header>
                                <div className="card-body">
                                    <SkillsProgressBars />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home
