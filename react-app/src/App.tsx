import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import Home from './pages/Home';
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape';
import Blog from './pages/Blog';

import { Dialog } from 'primereact/dialog';

function App() {

  const [verAlerta, setVerAlerta] = React.useState(false)

  const clicaBotao = ()=>{
    setVerAlerta(true)
  }

  return (
    <div className="App">
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      
      <Rodape texto='Texto ' clicaBotao={clicaBotao}/>
      <Dialog 
        visible={verAlerta} 
        position='top-right'
        modal 
        onHide={() => setVerAlerta(false)}
        style={{ width: '50vw' }}
        header="Header">
          <p className="m-0">
            Aqui tem o Dialog
          </p>
        </Dialog>
    </div>
  );
}

export default App;
