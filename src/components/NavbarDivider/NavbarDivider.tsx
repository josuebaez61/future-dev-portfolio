import React from 'react'
import './NavbarDivider.scoped.scss'

interface NavbarDividerProps {
    className?: string;
}

const NavbarDivider = ({ className = "" }: NavbarDividerProps) => {
    return (
        <div className={className} ></div>
    )
}

export default NavbarDivider
