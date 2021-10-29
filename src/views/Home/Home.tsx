import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import profilePicture from '~/assets/images/glitch-1.gif'
import { CertificatesCarousel } from '../../components/CertificatesCarousel/CertificatesCarousel'
import RandomCode from '../../components/RandomCode/RandomCode'
import SkillsProgressBars from '../../components/SkillsProgressBars/SkillsProgressBars'
import SkillsRadarChart from '../../components/SkillsRadarChart/SkillsRadarChart'
import GithubCard from '../../components/GithubCard/GithubCard'
import './Home.scoped.scss'

const Home = () => {
    return (
        <main className="container pt-3 pb-3">
            <div className="row gy-3">
                <aside className="col-12 col-md-4 col-lg-3 animate__animated animate__slideInLeft animate__faster">
                    <div className="card profile-aside-card">
                        <img src={profilePicture} className="card-img-top" alt="Josué Baez" />
                        <div className="card-body">
                            <h5>PROFILE_DATA</h5>
                            <ul className="profile-aside-card__profile-data-list">
                                <li><b>full_name:</b> Josue Baez</li>
                                <li><b>email:</b> jfuture.dev@gmail.com</li>
                                <li><b>role:</b> Full Stack Web Developer</li>
                                <li><b>location:</b> Buenos Aires, Argentina</li>
                            </ul>

                            <div className="social-networks-container mb-5">
                                <h5 className="text-center">SOCIAL NETWORKS</h5>
                                <div className="d-flex justify-content-around">
                                    <a rel="noreferrer" href="https://www.facebook.com/josuedev15" target="_blank">
                                        <FontAwesomeIcon size="lg" icon={faFacebook}/>
                                    </a>
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/josuebaez15/" target="_blank">
                                        <FontAwesomeIcon size="lg" icon={faLinkedin}/>
                                    </a>
                                    <a rel="noreferrer" href="https://www.instagram.com/josuebaez15/" target="_blank">
                                        <FontAwesomeIcon size="lg" icon={faInstagram}/>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <GithubCard />
                            </div>
                        </div>
                    </div>
                </aside>
                <section className="col-12 col-md-8 col-lg-9">
                    <div className="row gy-3">
                        <div className="col-12">
                            <article className="card card--cut-bottom-right card--radius-top-left animate__animated animate__zoomIn animate__faster">
                                <div className="card-header">PROFILE_DESCRIPTION</div>
                                <div className="card-body">
                                    <h5 className="card-title">¡Hola! Soy Josué, Desarrollador Web Full Stack. 💻</h5>
                                    <p>Desde muy chico maravillado con la informática y con pasión por el desarrollo de software, estoy llevando a cabo mi carrera como desarrollador de aplicaciones web. 🚀</p>
                                    <p>Actualmente vivo en Argentina, Buenos Aires. Tengo un gusto musical muy variado 🕺. Me gusta la historia 📖, la astronomía 🔭, la política 🏛️ y la economía 📈.</p>
                                    <p>Me interesan los desafios y trabajar con gente positiva.</p>
                                    <p>Hay que construir el futuro.</p>
                                </div>
                            </article>
                        </div>
                        <div className="col-6 animate__animated animate__zoomIn animate__faster">
                            <RandomCode withBackground uppercase length={20} />
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
                        <div className="col-12 col-lg-6 slide-right animate__animated animate__zoomIn animate__faster">
                            <article className="card card--cut-bottom-left">
                                <header className="card-header">
                                    DEVELOPMENT_SKILLS
                                </header>
                                <div className="card-body">
                                    <SkillsRadarChart />
                                </div>
                            </article>
                        </div>
                        <div className="col-12 col-lg-6 animate__animated animate__zoomIn animate__faster">
                            <article className="card">
                                <header className="card-header">
                                    SKILLS_PROGRESS
                                </header>
                                <div className="card-body">
                                    <SkillsProgressBars />
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Home
