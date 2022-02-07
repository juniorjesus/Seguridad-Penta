import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="ContainerPrincipal">
            <h1 className="tituloPrincipal">Seguridad Penta </h1>
            <p className="parrafoInicio">Nuestro compromiso es la seguridad total.</p>

            <div className="containerImagenes">
                <img src="https://res.cloudinary.com/djbaqvlnn/image/upload/v1644257662/perfiles_usuario_xuiahs.jpg" alt="..." />
            </div>
        </div>
    )
}

export default Home
