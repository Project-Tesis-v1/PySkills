// src/shared/components/Navbar.tsx
import React from 'react';
//import './Navbar.css';
import { FaBars } from "react-icons/fa";

interface NavbarProps {
    onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
    return (
        <nav className="navbar">
            <div className='navbar-left'>
                <button className='toggle-sidebar-icon' onClick={onToggleSidebar}>
                    <FaBars></FaBars>
                </button>
                <span className='navbar-brand'>PySkill</span>
            </div>
            <input type="text" className="navbar-search" placeholder="Search" />
            <div className="navbar-user">Lomatosiono</div>
        </nav>
    );
};

export default Navbar;
