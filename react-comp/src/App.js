import logo from './logo.svg';
import './App.css';
import HelloComp from './components/HelloComp';
import HelloFuncComp from './components/HelloFuncComp';
import ArrowLogin from './components/ArrowLogin';
import MyLogin from './components/MyLogin';
import StateComp from './components/StateComp';
import StateFuncComp from './components/StateFuncComp';
import EventComp from './components/EventComp';
import EventFuncComp from './components/EventFuncComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <HelloComp name = "홍길동" address ="부산" num="1">  반갑다 </HelloComp>
        <HelloFuncComp name ="성춘향" address ="남원" children="애기" />

        {/* props은 컴포넌트를 사용할때 작성, html 요소의 속성과 동일*/}
        <MyLogin login="true" name="사우디진"/>
        {/* JSX언어 {}통해서 자바스크립트를 쓸 수 있다. */}
        <ArrowLogin login={false} name="호올리" />

        <StateComp />
        <StateFuncComp />
        <EventComp />
        <EventFuncComp />
      </header>
    </div>
  );
}

export default App;
