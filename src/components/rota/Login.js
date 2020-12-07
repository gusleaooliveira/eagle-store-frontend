import React from 'react'
import Cabecalho from '../Cabecalho'
import {Link} from 'react-router-dom'

function Login(props){
    return  <div>
                <Cabecalho titulo={props.titulo} />

                <p>Ainda não é cadastrado? </p>
                <p>Faça seu cadadastro <Link to="/cadastrar" className="w3-text-blue">aqui</Link></p>
            </div>
}

export default Login