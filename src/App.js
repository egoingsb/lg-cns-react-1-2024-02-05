import './App.css';
function Counter(props){
  return <div>
    <h1>{props.title}</h1>
    <button>+</button> {props.initValue}
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
