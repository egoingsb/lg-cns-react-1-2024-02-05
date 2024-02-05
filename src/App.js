import './App.css';
import {useState, useEffect} from 'react';
function Counter({title, initValue}){
  const [value, setValue] = useState(initValue);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:9999/counter')
    .then(resp=>resp.json())
    .then(result=>{
         setValue(result.value);
    })
  },[]);
 
  const up = ()=>{
    const newValue = value+step;
    setValue(newValue);

    fetch('http://localhost:9999/counter/',{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({value:newValue})
    })
      .then(resp=>resp.json())
      .then(result=>{
        console.log(result);
      })

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
