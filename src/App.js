import './App.css';
import {useState} from 'react';
function Counter({title, initValue}){
  const [value, setValue] = useState(initValue);
  const [step, setStep] = useState(1);
  return (
    <div>
      <h1>{title}</h1>
      <input type="number" value={step} onChange={(evt)=>{
        setStep(Number(evt.target.value));
      }} />
      <button onClick={()=>setValue(value + step)}>+</button> {value}
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
