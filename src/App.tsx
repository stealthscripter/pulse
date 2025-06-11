import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Play from "./pages/Play";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/play" element={<Play />} />
    </Routes>
  );
}

export default App;
