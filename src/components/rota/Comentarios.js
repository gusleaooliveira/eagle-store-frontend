import React, { useEffect, useState } from 'react';
import { Get } from 'react-axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import cookie from 'react-cookies'
function Comentarios(props){
    const [comentario, setComentario] = useState(
        {nome: '', email: '', aplicativo: '', classificacao: '', comentario: ''} 
    );
    const [isRecarregar, setRecarregar] = useState(true)
    const [token, setToken] = useState({
        token: cookie.loadAll()
      })
    
      useEffect(() =>{
        console.log(token);
      })

    function handleChange(e) {
        comentario[e.target.id]=e.target.value;
        setRecarregar(false)
        console.log(comentario);
    }

    function handleClick(e) {
        comentario['aplicativo']=document.querySelector('#aplicativo').value;
        let cabecalho = { 'Content-Type': 'application/json' };
        console.log(comentario, cabecalho);

            fetch(`http://localhost:5000/api/comentario/`, {
                method: 'POST', headers: cabecalho, body: JSON.stringify(comentario)
            })
                .then((res) => {alert('Sucesso ao executar!')})
                .catch((erro) => {alert('erro ao executar!')})
        setComentario({nome: '', email: '', aplicativo: '', classificacao: '', comentario: ''} )
        document.querySelector('#formulario').reset()
        setRecarregar(true)

    }

    return  <div>
                <form id="formulario" className="w3-container w3-panel">
                    <div className="w3-row-padding">
                        <div className="w3-half">
                            <label id="nome">Nome:</label>
                            <input type="text" className="w3-input" required onChange={handleChange} id="nome" placeholder="Digite seu nome" />       
                        </div>
                        <div className="w3-half">
                            <label id="email">Email:</label>
                            <input type="email" className="w3-input" required onChange={handleChange} id="email" placeholder="Digite seu email" /> 
                        </div>
                    </div>

                    <label id="classificacao">Classifique o app:</label>
                    <select className="w3-select" id="classificacao" required onChange={handleChange} >
                        <option value="0">Muito Ruim</option>
                        <option value="1">Ruim</option>
                        <option value="2">Medio</option>
                        <option value="3">Bom</option>
                        <option value="4">Muito Bom</option>
                    </select>

                    <label id="comentario">Comentário:</label>
                    <textarea className="w3-input"  onChange={handleChange} required id="comentario" cols="50" rows="20" placeholder="Digite sua reclamação ou elogio aqui"></textarea>

                    <input type="hidden" id="aplicativo" value={props.id} />

                    <input type="submit" onClick={handleClick} className="w3-btn w3-block w3-green" value="salvar"  />
                              
                </form>
                <section className="w3-container w3-panel">
                    {isRecarregar == true &&
                        <Get  url={"http://localhost:5000/api/comentario/aplicativo/"+props.id} >
                        {(erro, response, isLoading, makeRequest, axios) => {
                            if(erro) return <p>Erro!</p>
                            if(isLoading) return <p> Carregando!</p>
                            if(response != null){
                                let codigo = [];
                                codigo.push(
                                        response.data.map((valores, indice)=>{
                                            return <article className="w3-container w3-panel">
                                                <p><b>Nome:</b> {valores.nome}  </p>
                                                <p><b>Email:</b> {valores.email} </p>
                                                <p><b>Comentário:</b> {valores.comentario} </p>
                                                <p><b>Satisfação: </b> 
                                                    {valores.classificacao == 0 && <span className="w3-text-red"><FontAwesomeIcon icon={faStar} /> </span>}
                                                    {valores.classificacao == 1 && <span className="w3-text-yellow"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>}
                                                    {valores.classificacao == 2 && <span className="w3-text-black"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>}
                                                    {valores.classificacao == 3 && <span className="w3-text-blue"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>}
                                                    {valores.classificacao == 4 && <span className="w3-text-green"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>}
                                                </p>
                                                <hr/>
                                            </article>
                                        })
                                        
                                );
                                return codigo;
                            }
                            return <p>Nem Carregou!</p>
                        }}
                    </Get>}
                </section>
            </div>
}

export default Comentarios;