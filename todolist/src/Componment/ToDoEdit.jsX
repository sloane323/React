function ToDoEdit({ selectedTodo, onUpdate }) {
    const [value, setValue] = useState('');
    const onChange = useCallback((e) => {
      setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(
      (e) => {
        setValue(''); //value 초기화
        //기본이벤트(새로고침) 방지
        e.preventDefault();
      },
      [value],
    );
    
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="todoedit__insert">
          <h2>수정하기</h2>
          <input
            onChange={onChange}
            value={value}
            placeholder="할 일을 입력하세요"
          />
          <button type="submit">수정하기</button>
        </form>
      </div>
    );
  }

  <Style>
  .TodoInsert {
	 display: flex;
	 background: #495057;
}
 .TodoInsert input {
	 width: 100%;
	 background: none;
	 outline: none;
	 border: none;
	 padding: 0.5rem;
	 font-size: 1.125rem;
	 line-height: 1.5;
	 color: white;
}
 .TodoInsert input::placeholder {
	 color: #dee2e6;
}
 .TodoInsert button {
	 background: none;
	 outline: none;
	 border: none;
	 background: #868e96;
	 color: white;
	 padding: 0 1rem;
	 font-size: 1.5rem;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 transition: 0.1s background ease-in;
}
 .TodoInsert button:hover {
	 background: #adb5bd;
}
 
  </Style>