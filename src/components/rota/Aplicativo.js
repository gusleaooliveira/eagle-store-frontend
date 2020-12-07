import React from 'react';
import { Get } from 'react-axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cabecalho from '../Cabecalho';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import Comentarios from './Comentarios';

function Aplicativo(props){
    let { id } = useParams()
    return  <div>
            <Cabecalho titulo={props.titulo} />
            <Get url={"http://localhost:5000/api/aplicativo/"+id}>
                {(erro, response, isLoading, makeRequest, axios) => {
                    if(erro)return <p>Erro!</p>
                    if(isLoading)return <p>Carregando!</p>
                    if(response != null){
                        let codigo = [];
                        codigo.push(<header className="w3-container w3-panel">
                                        <h3 className="w3-center">{response.data.nome}</h3>
                                        <h4 className="w3-center">{response.data.slogan}</h4>
                                    </header>);
                        codigo.push(<section className="w3-container w3-panel ">
                                        <p className="w3-container w3-panel w3-justify indent">{response.data.descricao}</p>
                                        <div class="w3-row">
                                            <div className="w3-col sm12 md6 l6 w3-center"><b>Licença:</b> {response.data.licenca} </div>
                                            <div className="w3-col sm12 md6 l6 w3-center"><b>Versão:</b> {response.data.versao} </div>
                                        </div>
                                        <p><b>Categorias: </b> 
                                            {response.data.categorias.map((valores, indice) => {
                                                return  <Link className="w3-button w3-tag w3-blue" to={"/categoria/"+valores._id}>
                                                            {valores.categoria}
                                                        </Link>;
                                            })}
                                        </p>
                                        <fieldset>
                                            <legend>Comandos Snap:</legend> 
                                        {response.data.comandoSnap.map((valores, indice) =>{
                                            return <div className="w3-row">
                                                <div className="w3-col sm12 md10 l10">
                                                    <input type="text" className="w3-input" id={"comandoSnap"+indice} disabled  value={valores} />
                                                </div>
                                                <div className="w3-col sm12 md2 l2">
                                                    <button className="w3-btn w3-block w3-blue" onClick={() => {
                                                        let copyText = document.querySelector('#comandoSnap'+indice);
                                                        copyText.select();
                                                        copyText.setSelectionRange(0, 9999);
                                                        document.execCommand("copy");
                                                        alert('Comando copiado:'+copyText.value);
                                                    }}>
                                                        <FontAwesomeIcon icon={faClipboard} />
                                                        Copiar
                                                    </button>
                                                </div>
                                            </div>
                                        })}
                                        </fieldset>
                                        <fieldset>
                                            <legend>Comando Flatpak:</legend>
                                            <div className="w3-row">
                                                <div className="w3-col sm12 md10 l10">
                                                    <input type="text" className="w3-input" disabled id={"comandoFlatpak"} value={response.data.comandoFlatpak} />
                                                </div>
                                                <div className="w3-col sm12 md2 l2">
                                                    <button className="w3-btn w3-block w3-blue"  onClick={() => {
                                                        let copyText = document.querySelector('#comandoFlatpak');
                                                        copyText.select();
                                                        copyText.setSelectionRange(0, 9999);
                                                        document.execCommand("copy");
                                                        alert('Comando copiado:'+copyText.value);
                                                    }}>
                                                        <FontAwesomeIcon icon={faClipboard} />
                                                        Copiar
                                                    </button>
                                                </div>
                                            </div>
                                        </fieldset>

                                        <Comentarios id={response.data._id} />
                                    </section>);
                        return codigo;
                    }
                    return <p>Nem Carregou!</p>
                }}
            </Get>
            </div>
}

export default Aplicativo;