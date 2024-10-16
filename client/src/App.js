import { useEffect, useState, createContext } from "react";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "./axios";
export const AppState = createContext();
function App() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data);
    } catch (error) {
      navigate("/login");
    }
  }

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <div>
      <AppState.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AppState.Provider>
    </div>
  );
}

export default App;
