import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Welcome from './Componentes/Welcome/Welcome';
import Parametro from './Componentes/Parametro/Parametro';
import Color from './Componentes/Color/Color';
function App() {

  return (
    <div class="App">
      <BrowserRouter>
        {/* Switch permite que se ejecute una ruta a la vez*/} 
        <Switch>
          <Route  path="/home" render = { () => <Welcome name="welcome"/>} /> 
          <Route  path="/:palabra/:color1/:color2" render = { (routeProps) => <Color  {...routeProps} />} />
          <Route  path="/:id"  render = { (routeProps) => <Parametro {...routeProps} />} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
