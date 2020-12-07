import React from 'react';
import { Fetch } from 'react-request';
import { Get } from 'react-axios';
import { Link } from 'react-router-dom';

function Menu(props){
    return  <div className="w3-top">
                <nav className="w3-bar w3-light-gray ">
                    <Link to="/" className="w3-bar-item w3-button">Início</Link>
                    <div className="w3-dropdown-hover">
                        <button className="w3-button">Categorias</button>
                        <div className="w3-dropdown-content w3-bar-block w3-card-4">
                            <Get url="http://localhost:5000/api/categoria">
                                {(error,response,isLoading,makeRequest,axios)=>{
                                    if(error)return <a href="" className="w3-bar-item w3-button">Erro</a>
                                    if(isLoading)return <a href="" className="w3-bar-item w3-button">Carregando!</a>
                                    if(response != null){
                                        let codigo = [];
                                        response.data.map((valor, indice) => {
                                            codigo.push(<Link to={"/categoria/"+valor._id} className="w3-bar-item w3-button">{valor.categoria}</Link>)
                                        });
                                        return codigo;
                                    }
                                    return <a href="" className="w3-bar-item w3-button">Nem carregou!</a>
                                }}
                            </Get>
                        </div>
                    </div>
                    <Link to="/login" className="w3-bar-item w3-right w3-button">Login</Link>
                </nav>
            </div>
}

export default Menu