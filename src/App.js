import React, {useReducer} from 'react';
import Reducer from './Reducer';


function App(props) {

  const [{r, g, b}, dispatch] = useReducer(Reducer, {r: 0, g: 150, b: 200}) 

  return (
    <div className="App">
      <h1 style={{color: `rgb(${r}, ${g}, ${b})`}}>UseReducer San easy san</h1>
      <div>
        <span>R</span>
        <button onClick={() => dispatch({type: "incr_r"})}>+</button>
        <button onClick={() => dispatch({type: "decr_r"})}>-</button>
      </div>
      <div>
        <span>G</span>
        <button>+</button>
        <button>-</button>
      </div>
      <div>
        <span>B</span>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

export default App;