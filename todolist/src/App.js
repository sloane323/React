import logo from './logo.svg';
import css from './Componment/css/css.css';
import ClockComp from './Componment/ClockComp';
import LoginComp from './Componment/LoginComp';
import TodoComp from './Componment/TodoComp';



function App() {
  return (
    <div className="App">
     
     <div id ="progressbar" clss = "progressbar"> </div>



    <ClockComp />
    <LoginComp />
    <TodoComp />

    
    </div>
  );
}

export default App;
