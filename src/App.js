import './App.css';
import {useState} from 'react';
function Counter({title, initValue}){
  const valueState = useState(initValue);
  const value = valueState[0];
  const setValue = valueState[1];
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={()=>setValue(value + 1)}>+</button> {value}
    </div>
  )
}
function App() {
  return (
    <div>
      <Counter title="카운터" initValue={2}/>
    </div>
  );
}

export default App;
