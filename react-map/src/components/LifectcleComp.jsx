//클래스형 컴포넌트
//라이프 사이클
import { Component } from "react";

class LifectcleComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "아버지의 해방일지",
            time : new Date()
        };
    }
    state = {  }
    
    id = 0;
    count = 0;
 
    // 컴포넌트의 실행시기에 따라서 라이프사이클 메서드를 사용 할 수있다. 
componentDidMount () {
    console.log("마운트 하였습니다.");
    this.id = setInterval(()=>{this.setState({time : new Date()})},1000);
    }

componentDidUpdate () {
    console.log ("업데이트 하였습니다.");}

componentWillUnmount() {
    console.log("언마운트 하였습니다. ");
    clearInterval(this.id);
}



    render() { 
   
        return ( <div>
            <h1 onClick={()=>{
                //setState가 실행되면 라이프사이클 업데이트 메소드가 실행 
                // 화면에 내용이 출력이 된다. 
                this.setState({title:'정지아 (지은이)창비2022-09-02'})}}>
                {this.state.title}</h1>
                {/*state의 값이 아닌 변수로 사용된 다음 자동으로 업데이트메소드를 실행하지 않는다.  */}
                 {/* 즉, 화면이 바뀌지 않는다. 그러나 그 안에 있는 데이터는 계속 바뀌고 있다.  */}
                <button onClick={()=>{this.count++}}> {this.count}</button>
                <p>
                {this.state.time.getHours()} : 
                {this.state.time.getMinutes()} : 
                {this.state.time.getSeconds()}
                </p>
        </div> );
    }
}
 
export default LifectcleComp;