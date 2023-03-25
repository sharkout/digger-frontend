import './App.css';
import Header from './components/Header/Header';
import DiggerCards from './components/DiggerCards/DiggerCards';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';

function App() {
  return (
    <div className="app">
      <Header />
      <DiggerCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
