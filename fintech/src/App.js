import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NewsPage from "./pages/NewsPage";
import AuthResultPage from "./pages/AuthResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/authResult" element={<AuthResultPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
