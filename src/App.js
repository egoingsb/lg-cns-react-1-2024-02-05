import './App.css';
import {useState} from 'react';
function Counter({title, initValue}){
  const [value, setValue] = useState(initValue);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);
  console.log('history', history);
  const up = ()=>{
    const newValue = value+step;
    setValue(newValue);
    
    // 잘못된 사례
    // history.push(newValue);
    // setHistory(history);

    const newHistory = [...history];
    newHistory.push(newValue);
    setHistory(newHistory);
  }
  return (
    <div>
      <h1>{title}</h1>
      <input type="number" value={step} onChange={(evt)=>{
        setStep(Number(evt.target.value));
      }} />
      <button onClick={up}>+</button> {value}
      <ol>
          {history.map((item,index)=>{
            return <li key={index}>{item}</li>
          })}
      </ol>
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
