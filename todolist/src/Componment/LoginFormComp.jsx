
const LoginFormComp = (props) => {
    const { setLogin, setName} = props
    return ( 
        <form onSubmit={(e) => {
            e.preventDefault();
            setLogin(true);}}
        >
            <input type="text" onChange={(e) => {setName(e.target.value);}} placeholder="이름을 입력해주세요" required/>
            <input type="submit" value="=" /> 
        </form>
    );
}

export default LoginFormComp;