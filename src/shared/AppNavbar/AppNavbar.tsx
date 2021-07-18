import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'primereact/button';
import NavbarDivider from '../../components/NavbarDivider/NavbarDivider';
import './AppNavbar.scoped.scss';
import navItems from '../nav-items';
import { SidebarContext } from '../../context/SidebarContext';
// import imageLogo from '~/assets/images/future-single-logo.png';

const AppNavbar = () => {

    const { setSidebarIsVisible } = useContext<any>(SidebarContext);

    return (
        < >
            <div className="container">
                <nav className="justify-content-between justify-content-md-center">
                    <Button onClick={() => setSidebarIsVisible((state: boolean) => !state)} className="p-button-danger p-button-text d-md-none">
                        <i className="pi pi-bars"></i>
                    </Button>
                    <ul className="d-none d-md-block">
                        {navItems.map(item => <li key={item.title}><NavLink exact activeClassName="active" to={item.path}> {item.title} </NavLink></li>)}
                    </ul>
                    {/* <img src={ imageLogo } /> */}
                </nav>
            </div>
            <NavbarDivider className="d-none d-md-block" />
        </>
    )
}

export default AppNavbar
