import React, { useEffect, useState } from 'react'
import axios from 'axios'
import cookie from 'react-cookies'
import Cabecalho from '../Cabecalho'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { AxiosProvider , Get} from 'react-axios'

function Usuario(props) {
    const [token, setToken] = useState({
        token: cookie.loadAll()
      })
    const [usuario, setUsuario] = useState({
      usuario: JSON.parse(token['token'].usuario).usuario,
      senha: JSON.parse(token['token'].usuario).senha
    })      
   
    const [usr, setUsr] = useState({
      nome: '', sobrenome: '', email: '', usuario: '',
      estado: '', bairro: '', rua: '', cidade: '',
      tipo: '', senha: '', cep: ''
    })

    const [abrir, setAbrir] = useState({
      clicado: false, id: '', hide: ''
    })

    

      useEffect(() =>{
        token['token'] = cookie.loadAll()
        // console.log('log: ', JSON.parse(token.token['usuario']), usuario, token.token['token']);        
      })

      const axiosInstance = axios.create({
        headers: {'x-access-token': token.token['token']}
    })
      
    function handleClick(e){
      console.log(e.target.id);
      let idInput = ''; let hideBtn = ''
      switch (e.target.id) {
        case 'btnNome': idInput = 'txtNome'; hideBtn = 'btnNome';  break;
        case 'btnEmail': idInput = 'txtEmail'; hideBtn = 'btnEmail'; break;
        case 'btnUsuario': idInput = 'txtUsuario'; hideBtn = 'btnUsuario';  break;
        case 'btnEstado': idInput = 'txtEstado'; hideBtn = 'btnEstado';  break;
        case 'btnBairro': idInput = 'txtBairro'; hideBtn = 'btnBairro'; break;
        case 'btnCidade': idInput = 'txtCidade'; hideBtn = 'btnCidade';  break;
        case 'btnRua': idInput = 'txtRua'; hideBtn = 'btnRua';  break;
        case 'btnCep': idInput = 'txtCep'; hideBtn = 'btnCep';  break;        
      }  
      // setUsr({
      //       nome: JSON.parse(token['token'].usuario).nome, sobrenome: JSON.parse(token['token'].usuario).sobrenome, email: JSON.parse(token['token'].usuario).email, usuario: JSON.parse(token['token'].usuario).usuario, senha: senha, 
      //       cep: JSON.parse(token['token'].usuario).cep, rua: JSON.parse(token['token'].usuario).rua, bairro: JSON.parse(token['token'].usuario).bairro, cidade: JSON.parse(token['token'].usuario).cidade, estado: JSON.parse(token['token'].usuario).estado,tipo: ['5fce8230cedc06a05dcdd6d6'] 
      //   })

      switch (e.target.id) {
        case 'btnNomeEnviar': idInput = ''; hideBtn = ''; usr['nome']=document.querySelector('#nome').value; break;
        case 'btnEmailEnviar': idInput = ''; hideBtn = '';usr['email']=document.querySelector('#email').value; break;
        case 'btnUsuarioEnviar': idInput = ''; hideBtn = ''; usr['usuario']=document.querySelector('#usuario').value; break;
        case 'btnEstadoEnviar': idInput = ''; hideBtn = ''; usr['estado']=document.querySelector('#estado').value; break;
        case 'btnBairroEnviar': idInput = ''; hideBtn = '';usr['bairro']=document.querySelector('#bairro').value; break;
        case 'btnCidadeEnviar': idInput = ''; hideBtn = ''; usr['rua']=document.querySelector('#cidade').value; break;
        case 'btnRuaEnviar': idInput = ''; hideBtn = ''; usr['rua']=document.querySelector('#rua').value; break;
        case 'btnCepEnviar': idInput = ''; hideBtn = ''; usr['cep']=document.querySelector('#cep').value; break;        
      }  
      
      setAbrir({clicado:true, id: idInput, hide: hideBtn})
      console.log(abrir);

      usuario['tipo']= ['5fce8230cedc06a05dcdd6d6']
      let cabecalho = { 'Content-Type': 'application/json'}
      // console.log(usuario, cabecalho);

      // fetch(`http://localhost:5000/api/usuario/`,{ 
      //     method: 'POST', headers: cabecalho, body: JSON.stringify(usuario) 
      // })
      //     .then((res) => { alert('Sucesso ao executar!');  })
      //     .catch((erro) => { alert('Erro ao executar!'); });
      
      // setUsuario({
      //     nome: '', sobrenome: '', email: '', usuario: '', senha: '', 
      //     cep: '', rua: '', bairro: '', cidade: '', estado: '',tipo: [''] 
      // })
    }

    return <section className="w3-container w3-panel">
                <Cabecalho titulo={props.titulo} />


                <AxiosProvider instance={axiosInstance}>
                    <Get url="http://localhost:5000/api/usuario/pesquisar" params={usuario} >
                        {(erro, response, isLoading, makeRequest, axios) =>{
                            if(erro) return <p>Erro!</p>
                            if(isLoading) return <p>Carregando!</p>
                            if(response != null){
                                let codigo = []
                                codigo.push(<section value="w3-container w3-panel">
                                              
                                              {response.data.map((valores, indice)=>{
                                                  return <div>
                                                            
                                                            <p><b>Nome: </b>{valores.nome+' '+valores.sobrenome} 
                                                              
                                                              {abrir['hide'] != 'btnNome' && <button className="w3-btn w3-orange" id="btnNome" onClick={handleClick}>
                                                                Editar <FontAwesomeIcon icon={faEdit} />
                                                              </button>}
                                                              
                                                              {abrir['id'] == 'txtNome' && <div><input type="text" id="nome" className="w3-input" /><input type="submit" value="Enviar" id="btnNomeEnviar" onClick={handleClick} className="w3-btn w3-green" /></div> }
                                                            
                                                            </p>
                                                            <p><b>Email: </b>{valores.email} 
                                                              
                                                            {abrir['hide'] != 'btnEmail' && <button className="w3-btn w3-orange"  id="btnEmail" onClick={handleClick}>
                                                                Editar <FontAwesomeIcon icon={faEdit} />
                                                              </button>}

                                                              {abrir['id'] == 'txtEmail' && <div><input type="text" id="email"  className="w3-input" /><input type="submit" value="Enviar" id="btnEmailEnviar"  onClick={handleClick}  className="w3-btn w3-green" /></div> }
                                                            
                                                            </p>
                                                            <p><b>Usuário: </b>{valores.usuario} 
                                                              
                                                            {abrir['hide'] != 'btnUsuario' && <button className="w3-btn w3-orange"   id="btnUsuario" onClick={handleClick}>
                                                                Editar <FontAwesomeIcon icon={faEdit} />
                                                              </button>}

                                                              {abrir['id'] == 'txtUsuario' && <div><input type="text"  id="usuario"  className="w3-input" /><input type="submit" value="Enviar"  id="btnUsuarioEnviar"  onClick={handleClick} className="w3-btn w3-green" /></div> }
                                                            
                                                            </p>
                                                            
                                                            {console.error('log:=>{',valores,'}')} 
                                                            {valores.estado != undefined && <p><b>Estado: </b>{valores.estado} 
                                                            
                                                            {abrir['hide'] != 'btnEstado' && <button className="w3-btn w3-orange"  id="btnEstado"  onClick={handleClick}>
                                                                Editar <FontAwesomeIcon icon={faEdit} />
                                                              </button>}

                                                              {abrir['id'] != 'txtEstado' && <div><input type="text"  id="estado"  className="w3-input" /><input type="submit" value="Enviar"  id="btnEstadoEnviar" onClick={handleClick}  className="w3-btn w3-green" /></div> }
                                                            
                                                            </p> } 
                                                            {valores.bairro != undefined &&  <p><b>Bairro: </b>{valores.bairro} 
                                                            {abrir['hide'] != 'btnBairro' && <button className="w3-btn w3-orange" id="btnBairro"  onClick={handleClick}>
                                                                Editar <FontAwesomeIcon icon={faEdit} />
                                                              </button>}

                                                              {abrir['id'] != 'txtBairro' && <div><input type="text"  id="bairro"  className="w3-input" /><input type="submit" value="Enviar" id="btnBairroEnviar"  onClick={handleClick}  className="w3-btn w3-green" /></div> }
                                                            
                                                            </p> }
                                                            {valores.rua != undefined &&  <p><b>Rua: </b>{valores.rua} 
                                                            {abrir['hide'] != 'btnRua' && <button className="w3-btn w3-orange" id="btnRua"  onClick={handleClick}>
                                                                Editar <FontAwesomeIcon icon={faEdit} />
                                                              </button>}

                                                              {abrir['id'] != 'txtRua' && <div><input type="text" id="rua"  className="w3-input" /><input type="submit" value="Enviar"  id="btnRuaEnviar"  onClick={handleClick} className="w3-btn w3-green" /></div> }
                                                            
                                                              </p> }
                                                            {valores.cidade != undefined &&  <p><b>Cidade: </b>{valores.cidade} 
                                                            {abrir['hide'] != 'btnCidade' && <button className="w3-btn w3-orange"    id="btnCidade" onClick={handleClick}>
                                                                Editar <FontAwesomeIcon icon={faEdit} />
                                                              </button>}

                                                              {abrir['id'] != 'txtCidade' && <div><input type="text"  id="cidade"  className="w3-input" /><input type="submit" value="Enviar"  id="btnCidadeEnviar"  onClick={handleClick} className="w3-btn w3-green" /></div> }
                                                            
                                                            </p> }
                                                            {valores.cep != undefined &&  <p><b>CEP: </b>{valores.cep} 
                                                              
                                                            {abrir['hide'] != 'btnCep' && <button className="w3-btn w3-orange"  id="btnCep" onClick={handleClick}>
                                                                Editar <FontAwesomeIcon icon={faEdit} />
                                                              </button>}

                                                              {abrir['id'] != 'txtCep' && <div><input type="text"  id="cep" className="w3-input" /><input type="submit" value="Enviar"  id="btnCepEnviar"  onClick={handleClick} className="w3-btn w3-green" /></div> }
                                                            
                                                            </p> }
                                                                          
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




