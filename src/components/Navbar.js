import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import { FaBook } from "react-icons/fa";

export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav>

                <Link className="link" to="/"><FaBook /></Link>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/Registro">Registrar Usuarios</Link>
                <Link className="link" to="/Listar">Lista de Usuarios</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}