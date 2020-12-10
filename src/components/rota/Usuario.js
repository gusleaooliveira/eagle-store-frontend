import React, { useEffect, useState } from 'react'
import axios from 'axios'
import cookie from 'react-cookies'
import Cabecalho from '../Cabecalho'
import { Get } from 'react-axios'

function Usuario(props) {
    const [token, setToken] = useState({
        token: cookie.loadAll()
      })

      
    function componentWillMount() {
        token['token'] = cookie.loadAll()
      }

      useEffect(() =>{
        token['token'] = cookie.loadAll()
        console.log(token);

      })
      
    const axiosInstance = axios.create({
        headers: {'x-accesss-token': token['token']}
    })
    return <section className="w3-container w3-panel">
                <Cabecalho titulo={props.titulo} />

                <Get url="http://localhost:5000/api/usuario/" instance={axiosInstance}>
                    {(erro, response, isLoading, makeRequest, axios) =>{
                        if(erro) return <p>Erro!</p>
                        if(isLoading) return <p>Carregando!</p>
                        if(response != null){
                            let codigo = []
                            return codigo
                        }
                        return <p>Nem Carregou!</p>
                    }}
                </Get>
            </section>
}

export default Usuario