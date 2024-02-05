import './App.css';
import style from './App.module.css';
import MyCounter, { Counter2 } from './Counter';
function App() {
  return (
    <div>
      <MyCounter title="카운터" initValue={2}/>
      <Counter2 />
    </div>
  );
}

export default App;
