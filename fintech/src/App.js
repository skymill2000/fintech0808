import logo from "./logo.svg";
import "./App.css";

const Welecome = ({ age, username }) => {
  return (
    <div>
      <h2>
        {age} 세 {username} 님 반갑습니다.
      </h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>안녕하세요</h1>
      <Welecome username={"유관우"} age={33}></Welecome>
      <Welecome username={"홍길동"} age={33}></Welecome>
      <Welecome username={"둘리"} age={33}></Welecome>
      <Welecome username={"도우너"} age={33}></Welecome>
    </div>
  );
}

export default App;
