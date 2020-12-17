import React, { useEffect, useState } from 'react'
import Cabecalho from '../Cabecalho'
import {Link} from 'react-router-dom'
import cookie from 'react-cookies'

function Login(props){
    const [usuario, setUsuario] = useState(
        {usuario: '', senha: ''}
    );
    const [log, setLog] = useState({
        log: ''
    })
    const [token, setToken] = useState({
        token: cookie.loadAll()
      })
     

      useEffect(() =>{
        token['token'] = cookie.loadAll()
        // console.log(token);
      })

    function handleChange(e) {
        usuario[e.target.id] = e.target.value;
        // console.log(usuario);
        // console.log(log);
    }

    function handleClick(e) {
        let cabecalho = { 'Content-Type': 'application/json' };
        // console.log(usuario, cabecalho);
        // console.log(log);
        

        fetch(`http://localhost:5000/api/login/`,{
            method: 'POST', headers: cabecalho, body: JSON.stringify(usuario)
        })
            .then((res) => res.json())
            .then((data) => {
                cookie.save('token', data.token)
                cookie.save('usuario', data.usuario)
                alert('Sucesso ao logar')
            })
            .catch((erro) => {
                cookie.remove('token')
                cookie.remove('usuario')
                alert('Erro ao executar!')
            })

        
        setUsuario({usuario: '', senha: ''})
        document.querySelector('#formulario').reset();
    }


    return  <div>
                <Cabecalho titulo={props.titulo} />

                <section className="w3-container w3-panel">
                    <div className="w3-card-4">
                        <form id="formulario">
                            <div className="w3-container w3-blue">
                                <h2 className="w3-center">Login</h2>
                            </div>

                            <div className="w3-container w3-panel">
                                <label htmlFor="">Usuário:</label>
                                <input type="text" className="w3-input"  onChange={handleChange} id="usuario" placeholder="Digite seu nome" />

                                <label htmlFor="">Senha:</label>
                                <input type="password" className="w3-input"   onChange={handleChange}  id="senha" placeholder="Digite sua senha" />
                            </div>
                            <input type="submit" className="w3-btn w3-block w3-green" value="Salvar" onClick={handleClick} /> 
                        </form>
                    </div>
                </section>


                <section className="w3-container w3-panel">
                    <p>Ainda não é cadastrado? </p>
                    <p>Faça seu cadadastro <Link to="/cadastrar" className="w3-text-blue">aqui</Link></p>
                </section>
            </div>
}

export default Login