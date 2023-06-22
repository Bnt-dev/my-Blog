import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllNinja from "./pages/AllNinja";
import OneNinja from "./pages/OneNinja";
import AdminHome from "./pages/Admin/AdminHome";
import AdminNinjas from "./pages/Admin/AdminNinjas";

import "./App.css";
import AdminTechniques from "./pages/Admin/AdminTechniques";
import AdminVillages from "./pages/Admin/AdminVillages";
import AdminRarities from "./pages/Admin/AdminRarities";

function App() {
  return (
    <Browser>
      <div>
        <Routes>
          <Route path="/api/admin" element={<AdminHome />} />
          <Route path="/api/admin/ninjas" element={<AdminNinjas />} />
          <Route path="/api/admin/techniques" element={<AdminTechniques />} />
          <Route path="/api/admin/villages" element={<AdminVillages />} />
          <Route path="/api/admin/rarities" element={<AdminRarities />} />

          <Route path="/" element={<Home />} />
          <Route path="/AllNinjas" element={<AllNinja />} />
          <Route path="/AllNinjas/:id" element={<OneNinja />} />
        </Routes>
      </div>
    </Browser>
  );
}

export default App;
