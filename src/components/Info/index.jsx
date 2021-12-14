import React from 'react';

import { Animated } from 'react-animated-css';

import './styles.css';

function Info({data}) {
  return (
    <Animated animationIn="bounceInUp" className='info'>
        <h2>CEP: {data?.cep}</h2>

        {data.logradouro && <h3>Rua: {data?.logradouro}</h3>}
        {data.complemento && <h3>Complemento: {data?.complemento}</h3>}
        {data.bairro && <h3>Bairro: {data?.bairro}</h3>}
        {data.localidade && <h3>Cidade: {data?.localidade}</h3>}
        {data.uf && <h3>Distrito: {data?.uf}</h3>}
    </Animated>
  );
}

export default Info;