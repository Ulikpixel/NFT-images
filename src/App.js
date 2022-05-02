import NFTImages from './NFTImages/NFTImages';
import { image } from './data';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <NFTImages {...image} />
    </div>
  );
}

export default App;
