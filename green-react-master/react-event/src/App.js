import './App.css';
import EventChangeComp from './components/EventChangeComp';
import EventChangeFuncComp from './components/EventChangeFuncComp';
import EventRefComp from './components/EventRefComp';
import EventRefCompTest from './components/EventRefCompTest';
import EventTest from './components/EventTest';
import Storybox from './components/Storebox';

function App() {
  return (
    <div className="App">
      <EventChangeComp />
      <EventChangeFuncComp />
      <EventRefComp />
      <EventRefCompTest />
      <EventTest />
      <Storybox />
    </div>
  );
}

export default App;
