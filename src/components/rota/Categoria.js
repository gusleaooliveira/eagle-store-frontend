import React from 'react';
import { Get } from 'react-axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cabecalho from '../Cabecalho';

function Categoria(props){
    let { id } = useParams();   
    return  <div>
                <Cabecalho titulo={props.titulo} />
                <Get url={"http://localhost:5000/api/aplicativo/categoria/"+id}>
                    {(erro, response, isLoading, makeRequest, axios)=>{
                        if(erro)return <p>Erro!</p>
                        if(isLoading)return <p>Carregando!</p>
                        if(response != null){
                            let codigo = [];
                            codigo.push(<section className="w3-container w3-panel">
                                            {response.data.map((valores, erro) => {
                                                return <div className="w3-container w3-panel">
                                                            <Link className="w3-button w3-tag w3-blue largura" to={"/aplicativo/"+valores._id}>
                                                                <h3 className="w3-center">{valores.nome}</h3>
                                                                <p className="w3-center">{valores.slogan}</p>
                                                            </Link>
                                                                

                                                            <p className="w3-right"><b>Categorias: </b>
                                                                {valores.categorias.map((valores, indice) => {
                                                                    return  <Link className="w3-button w3-tag w3-blue" to={"/categoria/"+valores._id}>
                                                                                {valores.categoria}
                                                                            </Link>
                                                                })}
                                                            </p>
                                                        </div>
                                            })}
                                        </section>);
                            return codigo;
                        }
                        return <p>Nem Carregou!</p>
                    }}
                </Get>
            </div>
}

export default Categoria;