import React from 'react';
import { Button } from 'primereact/button';

import './RodapeStyles.css';

type MyProps = {
  // using `interface` is also ok
  texto?: string;
  clicaBotao?: ()=>void
};

class Rodape extends React.Component<MyProps>{
    
  render(): React.ReactNode {
    return (
      <div className="rodape">
        {this.props.texto || 'Texto '}
        <Button 
          label="Ver alert" 
          onClick={this.props.clicaBotao}
          className="p-button-sm" />
      </div>
    )
  }
}

export default Rodape;