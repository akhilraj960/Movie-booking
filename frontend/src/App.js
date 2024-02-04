import "./App.css";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/AdminPages/Movies";
import AdminLayout from "./pages/AdminPages/AdminLayout";
import Language from "./pages/AdminPages/Language";
import DashBoard from "./pages/AdminPages/DashBoard";
import AdminLogin from "./pages/AdminPages/AdminLogin";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<DashBoard />} />
          <Route path="movies" element={<Movies />} />
          <Route path="language" element={<Language />} />
        </Route>
      </Routes>
    </div>
  ); 
}

export default App;
