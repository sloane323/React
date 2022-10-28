
import './App.css';
import StateEffectHookComp from './components/StateEffectHookComp';
import ReducerComp from './components/ReducerComp';
import UseMemoComp from './components/UseMemoComp';
import CallBackComp from './components/CallbackComp';
import RefComp from './components/RefComp';
import ContextCompAll from './components/ContextCompAll';
import ContextParentComp1 from './components/ContextParentComp1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <StateEffectHookComp />
      <ReducerComp />
      <UseMemoComp />
      <CallBackComp />
      <RefComp />

      <ContextCompAll />
      <ContextParentComp1 />
      </header>
    </div>
  );
}

export default App;
