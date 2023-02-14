import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, decreaseCount } from './redux/actions/actionCreator';

function App() {
  const count = useSelector((store) => store?.counter?.count);
  const dispatch = useDispatch();

  const incrCount = () => {
    dispatch(increaseCount());
  };
  const decrCount = () => {
    dispatch(decreaseCount());
  };

  return (
    <div className="App">
      <div className="logo">
        <h1>Vite + React</h1>
        <button onClick={incrCount}>+1</button>
        <button onClick={decrCount}>-1</button>
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default App;
