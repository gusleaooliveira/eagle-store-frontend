import React from 'react';
import { Get } from 'react-axios';
import { Route, Switch, useParams } from 'react-router-dom';
import Aplicativo from './rota/Aplicativo';
import Cadastrar from './rota/Cadastrar';
import Categoria from './rota/Categoria';
import Inicio from './rota/Inicio'
import Login from './rota/Login';

function Rotas(props){
    return  <Switch>
                <Route exact path="/">
                    <Inicio titulo="Início"/>
                </Route> 
                <Route path='/cadastrar' >
                    <Cadastrar titulo="Cadastrar" />
                </Route>
                <Route path='/login'>
                    <Login titulo="Login" />
                </Route>
                <Route path='/categoria/:id' children={<Categoria titulo="Categoria" /> } />
                <Route path='/aplicativo/:id' children={<Aplicativo titulo="Aplicativo" /> } />
            </Switch>
}

export default Rotas;