import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
