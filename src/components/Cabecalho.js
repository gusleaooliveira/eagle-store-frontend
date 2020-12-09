import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies'

function Cabecalho(props){
    const [token, setToken] = useState({
        token: cookie.loadAll()
    })
    
    useEffect(() =>{
        console.log(token);
    })
    
    return  <header className="w3-container w3-panel">
                <h1 className="w3-center">{props.titulo}</h1>
            </header>
}

export default Cabecalho;