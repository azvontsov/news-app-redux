import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from './redux/actions/actionCreator';
import News from './components/news';

function App() {
  const dispatch = useDispatch();

  const latestNews = useSelector((store) => store?.news?.latestNews || []);
  const popularNews = useSelector((store) => store?.news?.popularNews || []);

  const handleNews = () => {
    dispatch(getNews());
  };

  return (
    <div className="App">
      <div className="logo">
        <h1>News</h1>
        <button onClick={handleNews}>Get News</button>
        <News news={latestNews} title="Latest News" />
        <News news={popularNews} title="Popular News" />
      </div>
    </div>
  );
}

export default App;
