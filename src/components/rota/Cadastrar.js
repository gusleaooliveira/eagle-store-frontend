import React, { useState } from 'react';
import Cabecalho from '../Cabecalho';

function Cadastrar(props){
    const [usuario, setUsuario] = useState(
        {nome: '', sobrenome: '', email: '', usuario: '', senha: '',tipo: '' }
    );

    function handleChange(e){
        usuario[e.target.id]=e.target.value;
        console.log(usuario);
    }

    function handleClick(e){
        usuario['tipo']=''
        let cabecalho = { 'Content-Type': 'application/json'}
        console.log(usuario, cabecalho);

            fetch(`http://localhost:5000/api/usuario/`,{
                method: 'POST', headers: cabecalho, body: JSON.stringify(usuario)
            })
                .then((res) => {alert('Sucesso ao executar!')})
                .catch((erro) => {alert('Erro ao executar!')})
        
        setUsuario({nome: '', sobrenome: '', email: '', usuario: '', senha: '', tipo: '' })
        document.querySelector('#formulario').reset();
    }

    return  <div>
                <Cabecalho titulo={props.titulo}/>

                <section className="w3-container w3-panel">
                    <div className="w3-card-4">
                        <form id="formulario">
                            <div className="w3-container w3-blue">
                                <h2 className="w3-center">Cadastrar Usuário</h2>
                            </div>

                            <div className="w3-container">
                                <label htmlFor="">Nome:</label>
                                <input type="text" className="w3-input"  onChange={handleChange} id="nome" placeholder="Digite seu nome" />

                                <label htmlFor="">Sobrenome:</label>
                                <input type="text" className="w3-input"   onChange={handleChange}  id="sobrenome" placeholder="Digite seu sobrenome" />

                                <label htmlFor="">Email:</label>
                                <input type="email" className="w3-input"    onChange={handleChange} id="email" placeholder="Digite seu email" />

                                <label htmlFor="">Usuário:</label>
                                <input type="text" className="w3-input"   onChange={handleChange}  id="usuario" placeholder="Digite o usuário" />

                                <label htmlFor="">Senha:</label>
                                <input type="password" className="w3-input"   onChange={handleChange}  id="senha" placeholder="Digite sua senha" />
                               
                                <input type="hidden" value="tipo"    onChange={handleChange} id="tipo"  />
                            </div>

                            <input type="submit" className="w3-btn w3-block w3-green" value="salvar" onClick={handleClick} />
                        </form>
                        
                    </div>
                </section>
            </div>
}

export default Cadastrar;