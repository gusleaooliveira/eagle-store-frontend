import React from 'react';
import { Get } from 'react-axios';
import Cabecalho from '../Cabecalho';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTablet, faMobile, faTag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';


function Inicio(props){
    let { path, url } = useRouteMatch(); 

    return  <section className="w3-container w3-panel">
                <Cabecalho titulo={props.titulo} />
                
                <Get url="http://localhost:5000/api/aplicativo/destaque/1">
                        {(erro,response, isLoading, makeRequest, axios)=>{
                            if(erro)return <p>Erro!</p>
                            if(isLoading)return <p>Carregando!</p>
                            if(response != null){
                                let codigo = [];
                                response.data.map((valores, indices) => {
                                    codigo.push(<Link className="container panel w3-button w3-blue largura"  to={"/aplicativo/"+valores._id}>
                                                    <h3 className="w3-center">{valores.nome}</h3>
                                                    <p className="w3-center">{valores.slogan}</p>
                                                </Link>); 
                                });
                                return codigo;
                            }
                            return <p>Nem Carregou!</p>
                        }}
                    </Get>
                    
                
                <div className="w3-row">
                    <Get url="http://localhost:5000/api/aplicativo/destaque/4">
                        {(erro,response, isLoading, makeRequest, axios)=>{
                            if(erro)return <p>Erro!</p>
                            if(isLoading)return <p>Carregando!</p>
                            if(response != null){
                                let codigo = [];
                                response.data.map((valores, indices) => {
                                    codigo.push(<Link className="w3-col m6  l3 w3-button w3-blue w3-display-container aplicativos"  to={"/aplicativo/"+valores._id} >
                                                    <span className="w3-display-middle">
                                                        {valores.imagem != undefined && <FontAwesomeIcon icon={valores.icone} />}
                                                        {valores.imagem == undefined && <FontAwesomeIcon icon={faMobile} />}
                                                        {valores.nome}
                                                    </span>
                                                </Link>); 
                                });
                                return codigo;
                            }
                            return <p>Nem Carregou!</p>
                        }}
                    </Get>
                </div>
                <div className="w3-row">
                    <Get url="http://localhost:5000/api/aplicativo/destaque/4">
                        {(erro,response, isLoading, makeRequest, axios)=>{
                            if(erro)return <p>Erro!</p>
                            if(isLoading)return <p>Carregando!</p>
                            if(response != null){
                                let codigo = [];
                                response.data.map((valores, indices) => {
                                    codigo.push(<Link className="w3-col m6  l3 w3-button w3-blue  w3-display-container aplicativos"  to={"/aplicativo/"+valores._id} >
                                                     <span className="w3-display-middle">
                                                        {valores.imagem != undefined && <FontAwesomeIcon icon={valores.icone} />}
                                                        {valores.imagem == undefined && <FontAwesomeIcon icon={faMobile} />}
                                                        {valores.nome}
                                                    </span>
                                                </Link>); 
                                });
                                return codigo;
                            }
                            return <p>Nem Carregou!</p>
                        }}
                    </Get>
                </div>
                <div className="w3-row">
                    <Get url="http://localhost:5000/api/categoria/">
                        {(erro,response, isLoading, makeRequest, axios)=>{
                            if(erro)return <p>Erro!</p>
                            if(isLoading)return <p>Carregando!</p>
                            if(response != null){
                                let codigo = [];
                                response.data.map((valores, indices) => {
                                    codigo.push(<Link className="w3-col m6  l3 w3-button w3-orange  w3-display-container aplicativos"   to={"/categoria/"+valores._id}>
                                                     <span className="w3-display-middle">
                                                        {valores.imagem != undefined && <FontAwesomeIcon icon={valores.icone} />}
                                                        {valores.imagem == undefined && <FontAwesomeIcon icon={faTag} />}
                                                        {valores.categoria}
                                                    </span>
                                                </Link>); 
                                });
                                return codigo;
                            }
                            return <p>Nem Carregou!</p>
                        }}
                    </Get>
                </div>
                
            </section>
}

export default Inicio