import React from 'react';
import './App.css';

class Header extends React.Component {
  render() {
    const conteudos = [
      {
        nome: 'JavaScript assíncrono',
        bloco: 9,
        status: 'já aprendi',
      },
      {
        nome: 'Composição de Componentes',
        bloco: 10,
        status: 'estou aprendendo',
      },
      {
        nome: 'Composição de Estados',
        bloco: 11,
        status: 'aprenderei',
      },
      {
        nome: 'Redux',
        bloco: 15,
        status: 'aprenderei',
      },
    ];

    return (
      <body>
        <ul>
          {conteudos.map(({ status, nome, bloco }) => (
            <li key={ nome }>
              {
                `Eu ${status} o conteúdo ${nome} no bloco ${bloco}`
              }
            </li>
          ))}
        </ul>
      </body>
    );
  }
}

export default Header;
