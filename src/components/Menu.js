import React, { useEffect, useState } from 'react';
import { Get } from 'react-axios';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faTag, faUser, faUserAlt, faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

function Menu(props){

    let {path,  url} = useRouteMatch()

    const [token, setToken] = useState({
        token: cookie.loadAll()
    })
    const [pesquisar, setPesquisar] = useState('')

    function handleChange(e) {
        setPesquisar(e.target.value)
    }

    function handleClick(e) {
        setPesquisar('')
        document.querySelector('#pesquisar').value = "";  
    }

    function componentWillMount() {
        token['token'] = cookie.loadAll()
      }

      useEffect(() =>{
        token['token'] = cookie.loadAll()
      })

    return  <div className="w3-top">
                <nav className="w3-bar w3-light-gray ">
                    <Link to="/" className="w3-bar-item  w3-button">
                        <span className="hide-mobile">Início </span>
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                    <div className="w3-dropdown-hover ">
                        <button className="w3-button ">
                            <span className="hide-mobile">Categorias </span>
                            <FontAwesomeIcon icon={faTag} />
                        </button>
                        <div className="w3-dropdown-content w3-bar-block w3-card-4">
                            <Get url="http://localhost:5000/api/categoria">
                                {(error,response,isLoading,makeRequest,axios)=>{
                                    if(error)return <a href="" className="w3-bar-item  w3-button">Erro</a>
                                    if(isLoading)return <a href="" className="w3-bar-item  w3-button">Carregando!</a>
                                    if(response != null){
                                        let codigo = [];
                                        response.data.map((valor, indice) => {
                                            codigo.push(<Link to={"/categoria/"+valor._id} className="w3-bar-item  w3-button">{valor.categoria}</Link>)
                                        });
                                        return codigo;
                                    }
                                    return <a href="" className="w3-bar-item w3-button">Nem carregou!</a>
                                }}
                            </Get>
                        </div>
                    </div>
                    
                    {token.token.token == undefined && <Link to="/login" className="w3-bar-item  w3-right w3-button">
                            <span className="hide-mobile">Login </span>
                            <FontAwesomeIcon icon={faUserAlt} />
                        </Link>}
                    {token.token.token != undefined && <Link className="w3-bar-item w3-right  w3-button" to="/login" onClick={() =>{ cookie.remove('token'); cookie.remove('usuario'); token.token = cookie.loadAll(); alert('Sucesso ao deslogar'); }}>
                            <span className="hide-mobile">Logout </span>
                            <FontAwesomeIcon icon={faUserAltSlash} />
                        </Link> }
                    {token.token.token != undefined && <Link to="/usuario" className="w3-bar-tem  w3-button w3-right" >
                            <span className="hide-mobile">Seu usuário </span>
                            <FontAwesomeIcon icon={faUser} />
                        </Link> }
                    <Link to={"/pesquisar/"+pesquisar} className="w3-bar-item  w3-right w3-button" onClick={handleClick}>
                        <FontAwesomeIcon icon={faSearch} />
                    </Link> 
                    <input type="text" className=" w3-right w3-bar-item  w3-input" onChange={handleChange} id="pesquisar" placeholder="Pesquisar ..."/>
                    
                </nav>
            </div>
}

export default Menu