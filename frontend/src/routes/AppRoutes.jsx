import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Error404 from "../pages/error404";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error404/>}/>
      </Route>
    </Routes>
  );
}
