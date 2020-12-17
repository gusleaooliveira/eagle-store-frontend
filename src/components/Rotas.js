import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import Aplicativo from './rota/Aplicativo';
import Cadastrar from './rota/Cadastrar';
import Categoria from './rota/Categoria';
import Inicio from './rota/Inicio'
import Login from './rota/Login';
import Pesquisar from './rota/Pesquisar';
import Usuario from './rota/Usuario';

function Rotas(props){


    return  <div className="w3-container w3-panel">  
              <Switch>
                  <Route exact path="/">
                      <Inicio titulo="Início"/>
                  </Route> 
                  <Route path='/cadastrar' >
                      <Cadastrar titulo="Cadastrar" />
                  </Route>
                  <Route path='/login'>
                      <Login titulo="Login" />
                  </Route>
                  <Route path='/usuario' >
                    <Usuario titulo="Usuário" />
                  </Route>
                  <Route path='/categoria/:id' children={<Categoria titulo="Categoria" /> } />
                  <Route path='/aplicativo/:id' children={<Aplicativo titulo="Aplicativo" /> } />
                  <Route path='/pesquisar/:id' children={<Pesquisar titulo="Pesquisar" /> } />
                  

              </Switch>
            </div>
}

export default Rotas;