import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route  path="/" element={<Dashboard/>}/>
      <Route path="/SignUp" element={<Register/>} />
    </Routes>
  );
}

export default App
