import React from 'react';

function Rodape(props) {
    return  <footer className="w3-container w3-painel w3-light-gray">
                <div className="w3-row">
                    <div className="w3-col m4 l3">
                        <p className="w3-center">
                            Criado por <a href="https://www.linktree.com.br/gusleaooliveira" className="w3-text-blue">Gustavo Leão.</a>
                        </p>
                    </div>
                    <div className="w3-col m8 l9">
                        <p className="w3-center">
                            Redes sociais e meus sites:
                        </p>
                        <ul>
                            <li><a href="https://github.com/gusleaooliveira" className="w3-text-blue">Github</a></li>
                            <li><a href="mailto:gus.leaono@gmail.com" className="w3-text-blue">Gmail</a></li>
                            <li><a href="https://gusleaooliveira.github.io/posts/" className="w3-text-blue">Posts</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
}

export default Rodape;