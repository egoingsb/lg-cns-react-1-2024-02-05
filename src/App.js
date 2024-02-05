import './App.css';
function Counter({title, initValue}){
  return <div>
    <h1>{title}</h1>
    <button>+</button> {initValue}
  </div>
}
function App() {
  return (
    <div>
      <Counter title="카운터" initValue={2}/>
      <Counter title="불면증 카운터" initValue={4}/>
    </div>
  );
}

export default App;
