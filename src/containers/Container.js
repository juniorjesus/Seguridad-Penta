import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route} 
    from 'react-router-dom';
import Footer from '../components/Footer';
import { Form } from '../components/Form';
import Home from '../components/Home';
import { List } from '../components/List';
import { Navbar } from '../components/Navbar';

export const Container = () => {
    return (
        <div>
            <Router>
            <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/Registro" element={<Form/>}/>
                    <Route exact path="/Listar" element={<List/>}/>
                </Routes>
            <Footer/>
            </Router>
        </div>
    )
}