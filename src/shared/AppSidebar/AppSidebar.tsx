import React, { useContext, useState } from 'react'
import { Sidebar } from 'primereact/sidebar';
import { SidebarContext } from '../../context/SidebarContext';
import futureLogo from '~/assets/images/future-logo.png';
import './AppSidebar.scoped.scss'
import navItems from '../nav-items';
import { NavLink } from 'react-router-dom';

const AppSidebar = () => {

    const { sidebarIsVisible, setSidebarIsVisible } = useContext<any>(SidebarContext);

    return (
        <Sidebar visible={sidebarIsVisible} onHide={() => setSidebarIsVisible(false)} className="cyber-sidebar">
            <div>
                <img className="w-100" src={futureLogo} alt="" />
                <ul>
                    {navItems.map(
                        item =>
                            <li key={item.title}>
                                <NavLink onClick={() => setSidebarIsVisible(false)} exact to={item.path} >{item.title}</NavLink>
                            </li>
                    )
                    }
                </ul>
            </div>
        </Sidebar>
    )
}

export default AppSidebar
