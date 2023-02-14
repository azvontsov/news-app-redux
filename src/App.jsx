import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const store = useSelector((store) => store);
  console.log(store);
  return (
    <div className="App">
      <div className="logo">
        <h1>Vite + React</h1>
      </div>
    </div>
  );
}

export default App;
