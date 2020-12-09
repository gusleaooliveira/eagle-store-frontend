import React, { useEffect, useState } from 'react';
import { Fetch } from 'react-request';
import { Get } from 'react-axios';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

function Menu(props){

    let {path,  url} = useRouteMatch()

    const [token, setToken] = useState({
        token: cookie.loadAll()
    })
    const [pesquisar, setPesquisar] = useState('')

    function handleChange(e) {
        setPesquisar(e.target.value)
        console.log(pesquisar);
    }

    function handleClick(e) {
        setPesquisar('')
        document.querySelector('#pesquisar').value = "";
        console.log(pesquisar);       
    }

    useEffect(() =>{
    console.log(token);
    console.log(pesquisar);
    })

    return  <div className="w3-top">
                <nav className="w3-bar w3-light-gray ">
                    <Link to="/" className="w3-bar-item w3-button">Início</Link>
                    <div className="w3-dropdown-hover">
                        <button className="w3-button">Categorias</button>
                        <div className="w3-dropdown-content w3-bar-block w3-card-4">
                            <Get url="https://eagle-store.herokuapp.com/api/categoria">
                                {(error,response,isLoading,makeRequest,axios)=>{
                                    if(error)return <a href="" className="w3-bar-item w3-button">Erro</a>
                                    if(isLoading)return <a href="" className="w3-bar-item w3-button">Carregando!</a>
                                    if(response != null){
                                        let codigo = [];
                                        response.data.map((valor, indice) => {
                                            codigo.push(<Link to={"/categoria/"+valor._id} className="w3-bar-item w3-button">{valor.categoria}</Link>)
                                        });
                                        return codigo;
                                    }
                                    return <a href="" className="w3-bar-item w3-button">Nem carregou!</a>
                                }}
                            </Get>
                        </div>
                    </div>
                    
                    <Link to="/login" className="w3-bar-item w3-right w3-button">Login</Link>
                    <button className="w3-bar-item w3-right w3-button" onClick={
                        () =>{
                            fetch(`https://eagle-store.herokuapp.com/api/login/logout`,{
                                method: 'GET'
                            })
                                .then((res) => {
                                    cookie.remove( 'token')
                                    alert('Sucesso ao deslogar')  
                                })
                                .catch((erro) => {
                                    alert('Erro ao executar!')
                                })

                        }
                    }>Logout</button>

                    <Link to={"/pesquisar/"+pesquisar} className="w3-bar-item w3-right w3-button" onClick={handleClick}>
                        <FontAwesomeIcon icon={faSearch} />
                    </Link> 
                    <input type="text" class=" w3-right w3-bar-item w3-input" onChange={handleChange} id="pesquisar" placeholder="Pesquisar ..."/>
                    
                </nav>
            </div>
}

export default Menu