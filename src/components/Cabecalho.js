import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies'

function Cabecalho(props){     
    return  <header className="w3-container w3-panel">
                <h1 className="w3-center">{props.titulo}</h1>
            </header>
}

export default Cabecalho;