import React, { Component } from 'react';
import { ContainerPrincipal, ContainerTexto, P, P2 } from "../styles/Footer.elements";


export default class Footer extends Component {
    render() {
        return (
            <ContainerPrincipal>

                <ContainerTexto>
                    <P>
                    Hecho con ❤️ por JrJesus18
                    </P>
                    
                    <P2>
                        Copyright 2022 - Todos los derechos reservados.
                    </P2>
                </ContainerTexto>

            </ContainerPrincipal>
        )
    }
}