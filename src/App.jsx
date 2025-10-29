import { Routes, Route, useNavigate } from "react-router-dom";
import Design from "./Pages/Design";
import Success from "./Pages/Success";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Design />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
