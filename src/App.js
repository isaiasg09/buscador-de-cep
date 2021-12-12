import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import './styles/global.css';

import api from './services/api';

import Search from './components/Search';
import Info from './components/Info';

function App() {
  const [data, setData] = useState();

  function pullCep(cep) {
    getData(cep);
  }

  async function getData(cep) {
    await api.get(`/${cep}/json/`).then(response => {
      if(response.data.erro === true) {
        toast.error('CEP inexistente!');
      } else {
        setData(response.data);
      }
    }).catch(error=>{
      toast.error('Número inválido!');
      console.log(error);
    });
  }

  return (
    <div className="App">
      <Toaster />

      <h1>Buscador CEP</h1>

      <Search cep={pullCep}/>

      {data && <Info data={data}/>}
      
      
    </div>
  );
}

export default App;