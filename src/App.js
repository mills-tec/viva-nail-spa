import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VivaHome from "./pages/VivaHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VivaHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
