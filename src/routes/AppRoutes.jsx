import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RepoFinder from "../pages/RepoFinder";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/" element={<RepoFinder />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
