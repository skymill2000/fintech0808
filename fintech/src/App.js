import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputExample from "./components/InputExample";
import ListComponent from "./components/ListComponent";
import StyledComponent from "./components/StyledComponent";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
