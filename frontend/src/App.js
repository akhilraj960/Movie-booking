import "./App.css";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/AdminPages/Movies";
import AdminLayout from "./pages/AdminPages/AdminLayout";
import Language from "./pages/AdminPages/Language";
import DashBoard from "./pages/AdminPages/DashBoard";
import AdminLogin from "./pages/AdminPages/AdminLogin";
import Users from "./pages/AdminPages/Users";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<DashBoard />} />
          <Route path="movies" element={<Movies />} />
          <Route path="language" element={<Language />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
