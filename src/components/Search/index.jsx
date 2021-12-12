import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import toast from 'react-hot-toast';

import { RiSearchLine } from 'react-icons/ri';

import './styles.css';

function Search(props) {
  const [input, setInput] = useState('');

  const listenEnter=(event)=> {
    if (event.key === 'Enter') {
      pushCep();
    }
  }

  async function pushCep() {
    if(!input) {
      toast.error('Nenhum CEP inserido!');
    } else {
      await props.cep(input);
    }
  }
  
  return (
    <Animated animationIn='fadeInUp' className='search-container'>
        <input type="number" name='cep-input' id='cep-input' placeholder='Digite seu cep...' maxLength='8' minLength='8' onKeyDown={(e) => listenEnter(e)} onChange={(e)=>setInput(e.target.value)}/>
        
        <button className='search-button' onClick={()=>pushCep()}>
          <RiSearchLine />
        </button>
    </Animated>
  );
}

export default Search;