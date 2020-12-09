import { func } from 'prop-types'
import  React from 'react'
import { useParams } from 'react-router-dom'
import { Get } from 'react-axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Cabecalho from '../Cabecalho'

function Pesquisar(props){
    let { id } = useParams()

    return  <section className="w3-container w3-panel">
                <Cabecalho titulo={props.titulo} />

                <Get url={"https://eagle-store.herokuapp.com/api/aplicativo/pesquisar/"+id} >
                    {(erro, response, isLoading, makeRequest, axios)=>{
                        if(erro)return <p>Erro!</p>
                        if(isLoading)return <p>Carregando!</p>
                        if(response.data.length == 0) return <p> Nenhum foi encontrado!</p>
                        if(response != null){
                            let codigo = []
                            codigo.push(<section className="w3-container w3-panel">
                                            
                                            {response.data.map((valores, erro) => {
                                                return <div className="w3-container w3-panel">
                                                            <Link className="w3-button w3-blue largura" to={"/aplicativo/"+valores._id}>
                                                                <h3 className="w3-center">{valores.nome}</h3>
                                                                <p className="w3-center">{valores.slogan}</p>
                                                            </Link>

                                                            <p className="w3-rigth"><b>Categorias</b>
                                                                {valores.categorias.map((valores, indice) => {
                                                                    return <Link className="w3-button w3-tag w3-blue" to={"/categoria/"+valores._id}>
                                                                                {valores.categoria}
                                                                            </Link>
                                                                })}
                                                            </p>
                                                        </div>
                                            })}
                                        </section>)
                            return codigo
                        }
                        return <p>Não aconteceu nada!</p>
                    }}
                </Get>
            </section>
}

export default Pesquisar