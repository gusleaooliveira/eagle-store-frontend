import React, { useEffect, useState } from 'react';
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

    function componentWillMount() {
        token['token'] = cookie.loadAll()
      }

      useEffect(() =>{
        token['token'] = cookie.loadAll()
        console.log(token);
      })

    return  <div className="w3-top">
                <nav className="w3-bar w3-light-gray ">
                    <Link to="/" className="w3-bar-item w3-button">Início</Link>
                    <div className="w3-dropdown-hover">
                        <button className="w3-button">Categorias</button>
                        <div className="w3-dropdown-content w3-bar-block w3-card-4">
                            <Get url="http://localhost:5000/api/categoria">
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
                    
                    {token.token.token == undefined && <Link to="/login" className="w3-bar-item w3-right w3-button">Login</Link>}
                    {token.token.token != undefined && <button className="w3-bar-item w3-right w3-button" onClick={() =>{ cookie.remove('token'); token.token = cookie.loadAll(); alert('Sucesso ao deslogar'); window.location.reload()}}>Logout</button> }
                    <Link to="/usuario" className="w3-bar-tem w3-button w3-right" >Seu usuário</Link>
                    <Link to={"/pesquisar/"+pesquisar} className="w3-bar-item w3-right w3-button" onClick={handleClick}>
                        <FontAwesomeIcon icon={faSearch} />
                    </Link> 
                    <input type="text" className=" w3-right w3-bar-item w3-input" onChange={handleChange} id="pesquisar" placeholder="Pesquisar ..."/>
                    
                </nav>
            </div>
}

export default Menu