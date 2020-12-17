import React, { useEffect, useState } from 'react';
import Cabecalho from '../Cabecalho';
import cookie from 'react-cookies';
import ViaCep from 'react-via-cep';

function Cadastrar(props){
    const [usuario, setUsuario] = useState({
        nome: '', sobrenome: '', email: '', usuario: '', senha: '', 
        cep: '', rua: '', bairro: '', cidade: '', estado: '',tipo: [''] 
    });
    const [token, setToken] = useState({ token: cookie.loadAll() })
    const [cep, setCep] = useState('')

    useEffect(() =>{ token['token'] = cookie.loadAll(); })

    function handleChange(e){
        if(e.target.id == 'cep')setCep(e.target.value)
        usuario[e.target.id]=e.target.value;
        // console.log(usuario);
    }
    function handleFocus(e){
        if(e.target.id == 'cep')setCep(e.target.value)
        usuario[e.target.id]=e.target.value;
        // console.log(usuario);
    }
    

    function handleClick(e){
        usuario['cidade']=document.querySelector('#cidade').value
        usuario['bairro']=document.querySelector('#bairro').value
        usuario['estado']=document.querySelector('#estado').value
        usuario['rua']=document.querySelector('#rua').value
        usuario['tipo']= ['5fce8230cedc06a05dcdd6d6']
        let cabecalho = { 'Content-Type': 'application/json'}
        // console.log(usuario, cabecalho);

        fetch(`http://localhost:5000/api/usuario/`,{ 
            method: 'POST', headers: cabecalho, body: JSON.stringify(usuario) 
        })
            .then((res) => { alert('Sucesso ao executar!');  })
            .catch((erro) => { alert('Erro ao executar!'); });
        
        setUsuario({
            nome: '', sobrenome: '', email: '', usuario: '', senha: '', 
            cep: '', rua: '', bairro: '', cidade: '', estado: '',tipo: [''] 
        })
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

                                <br/>                                
                                <div>
            <fieldset>
                <legend>Local:</legend>
            <ViaCep cep={cep} lazy>
                {({ data, loading, error, fetch }) => {
                    if(data){
                        return <div>
                                    <div>
                                        <label htmlFor="">Cep:</label>
                                        <input type="text" id="cep" onChange={handleChange} value={cep} className="w3-input" placeholder="Digite o cep" />
                                        <input type="submit" className="w3-btn w3-block w3-blue" onClick={fetch} value="Carregar" />
                                    </div>

                                    <label htmlFor="">Cidade:</label>
                                    <input type="text" value={data.localidade} id="cidade" onFocus={handleFocus}  onChange={handleChange} className="w3-input" placeholder="Cidade" />

                                    <label htmlFor="">Rua:</label>
                                    <input type="text" value={data.logradouro} id="rua"  onFocus={handleFocus} onChange={handleChange}  className="w3-input"  placeholder="Rua ou Avenida" />

                                    <label htmlFor="">Bairro:</label>
                                    <input type="text" value={data.bairro} id="bairro"  onFocus={handleFocus}  onChange={handleChange}  className="w3-input" placeholder="Bairro" />
                                    
                                    <label htmlFor="">Estado:</label>
                                    <input type="text" value={data.uf} id="estado" onFocus={handleFocus}  onChange={handleChange} className="w3-input"  placeholder="Estado" />                                       
                                    
                                </div>
                    }                    
                    if(loading) return <p>Carregando!</p>
                    if(error){
                        return <div>
                                    <div>
                                        <label htmlFor="">Cep:</label>
                                        <input type="text" id="cep" onChange={handleChange} value={cep} className="w3-input" placeholder="Digite o cep" />
                                        <input type="submit" className="w3-btn w3-block w3-blue"  onClick={fetch} value="Carregar" />
                                    </div>

                                    <label htmlFor="">Cidade:</label>
                                    <input type="text" className="w3-input" id="cidade" onFocus={handleFocus} onChange={handleChange} placeholder="Cidade" />

                                    <label htmlFor="">Rua:</label>
                                    <input type="text" className="w3-input" id="rua" onFocus={handleFocus}   onChange={handleChange}  placeholder="Rua ou Avenida" />

                                    <label htmlFor="">Bairro:</label>
                                    <input type="text" className="w3-input" id="bairro"  onFocus={handleFocus} onChange={handleChange}  placeholder="Bairro" />
                                    
                                    <label htmlFor="">Estado:</label>
                                    <input type="text" className="w3-input" id="estado"  onFocus={handleFocus} onChange={handleChange}  placeholder="Estado" />                                       
                                    
                                </div>
                    }    
                    else{
                        return <div>
                                    <div>
                                        <label htmlFor="">Cep:</label>
                                        <input type="text" id="cep" onChange={handleChange} value={cep} className="w3-input" placeholder="Digite o cep" />
                                        <input type="submit" className="w3-btn w3-block w3-blue" onClick={fetch}  value="Carregar" />
                                    </div>

                                    <label htmlFor="">Cidade:</label>
                                    <input type="text" className="w3-input" id="cidade" onFocus={handleFocus}  onChange={handleChange} placeholder="Cidade" />

                                    <label htmlFor="">Rua:</label>
                                    <input type="text" className="w3-input" id="rua"  onFocus={handleFocus} onChange={handleChange}  placeholder="Rua ou Avenida" />

                                    <label htmlFor="">Bairro:</label>
                                    <input type="text" className="w3-input" id="bairro"  onFocus={handleFocus} onChange={handleChange} placeholder="Bairro" />
                                    
                                    <label htmlFor="">Estado:</label>
                                    <input type="text" className="w3-input" id="estado"  onFocus={handleFocus} onChange={handleChange}  placeholder="Estado" />                                       
                                    
                                </div>
                    }    
                }}
            </ViaCep>
            </fieldset>
        </div>
                                <br/>

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