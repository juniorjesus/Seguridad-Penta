import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../helpers/url'
import '../styles/Lista.css';
import ReactHTMLTableToExcel from "react-html-table-to-excel"
// import reactHtmlTableToExcel from 'react-html-table-to-excel';
// import ExportExcel from 'react-export-excel';
// import ExcelFile from 'react-export-excel/dist/ExcelPlugin/components/ExcelFile';

// const ExcelFile = ExportExcel.ExcelFile;
// const ExcelSheet = ExportExcel.ExcelSheet;
// const ExcelColumn = ExportExcel.ExcelColumn;


export const List = () => {

    const [autores, setAutores] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(url)
            .then(response => {
                setAutores(response.data);
            }).catch(error => {
                console.log(error);
        })
    }

    const dataDelete = (id) => {
        axios.delete(url + id)
            .then(response => {
            getData() 
            }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            {/* <ExcelFile element={<button>Exportar a Excel</button>} filename="excel-seguridad-penta">
            <ExcelSheet data={url} name="Lista de usuarios">
            <ExcelColumn label="nombre" value="nombre" />
            <ExcelColumn label="nro de documento" value="pais" />
            <ExcelColumn label="Genero" value="Genero" />
            <ExcelColumn label="edad" value="libros" />
            <ExcelColumn label="Hobbies" value="Hobies" />
            <ExcelColumn label="Contraseña" value="favorito" />
            </ExcelSheet>
            </ExcelFile> */}

        <h1 className="tituloPrincipal">Usuarios Registrados</h1>
        <div className="ContainerTabla">
            <table className="tabla" id="emp-table" >
                <thead>
                    <tr>
                    <th>Foto del Usuario</th>
                    <th>Nombre del Usuario</th>
                    <th>Nro de Documento</th>
                    <th>Genero</th>
                    <th>Edad</th>
                    <th>Hobbies</th>
                    <th>Contraseña</th>

                    </tr>
                </thead>
                
                <tbody>
                   {
                        autores.map(autor => (
                            <tr key={autor.id}>
                                <td><img className="fotoAutor" src={autor.imagen} alt="..." /></td>
                                <td>{autor.nombre}</td>
                                <td>{autor.pais}</td>
                                <td>{autor.Genero}</td>
                                <td>{autor.libros}</td>
                                <td>{autor.hobbies}</td>
                                <td>{autor.favorito}</td>

                                <td><button className="botonEliminar" onClick={()=> dataDelete(autor.id)}>Eliminar</button></td>
                            </tr>
                       ))    
                   }
                </tbody>
            </table>

            <ReactHTMLTableToExcel
                className= "btn btn-info"
                table="emp-table"
                filename="Emp Excel file"
                sheet="Sheet"
                buttonText="Exportar con  Excel"
            
            />
            </div>
           
            
            </div>
    )
}


