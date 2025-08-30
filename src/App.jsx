import Home from "./pages/Home";
import Browse from "./pages/Browse";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
