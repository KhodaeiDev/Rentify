import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import AboutUS from "../pages/AboutUS";
import Login from "../pages/Login";
import PropertiesList from "../pages/PropertiesList";
import PropertyDetail from "../pages/PropertyDetail";
import SignUp from "../pages/SignUp";
import Error404 from "../pages/error404";
import Home from "./../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/property" element={<PropertiesList />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
