import React, { useEffect, useState } from 'react'
import axios from 'axios'
import cookie from 'react-cookies'
import Cabecalho from '../Cabecalho'
import { AxiosProvider , Get} from 'react-axios'

function Usuario(props) {
    const [token, setToken] = useState({
        token: cookie.loadAll()
      })

      
    function componentWillMount() {
        token['token'] = cookie.loadAll()
      }

      useEffect(() =>{
        token['token'] = cookie.loadAll()
        console.log(token == undefined);
        console.log(JSON.parse(token.token['token']).token);
      })
      
    const axiosInstance = axios.create({
        headers: {'x-access-token': JSON.parse(token.token['token']).token}
    })

    return <section className="w3-container w3-panel">
                <Cabecalho titulo={props.titulo} />
                

                  <AxiosProvider instance={axiosInstance}>
                    <Get url="http://localhost:5000/api/usuario/pesquisar" params={JSON.parse(token.token['usuario'])} >
                        {(erro, response, isLoading, makeRequest, axios) =>{
                            if(erro) return <p>Erro!</p>
                            if(isLoading) return <p>Carregando!</p>
                            if(response != null){
                                let codigo = []
                                codigo.push(<section value="w3-container w3-panel">
                                              
                                              {response.data.map((valores, indice)=>{
                                                  return <div>
                                                            <p><b>Nome:</b>{valores.nome+' '+valores.sobrenome}</p>
                                                            <p><b>Email:</b>{valores.email}</p>
                                                            <p><b>Usuário:</b>{valores.usuario}</p>
                                                            
                                                          </div>
                                              })}
                                            </section>)
                                return codigo
                            }
                            return <p>Nem Carregou!</p>
                        }}
                    </Get>
                  </AxiosProvider>


            </section>
}

export default Usuario