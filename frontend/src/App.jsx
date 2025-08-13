import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import AppLayout from "./layouts/AppLayout";

// Pages
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import SummaryTranslation from "./pages/SummaryTranslation";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Subscription from "./pages/Subscription";
import BookReader from "./pages/BookReader";
import Auth from "./pages/AuthPage";

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} />

      {/* Pages that use the Sidebar layout */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/summarytranslation" element={<SummaryTranslation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subscription" element={<Subscription />} />
      </Route>

      {/* Reading page WITHOUT Dashboard layout */}
      <Route path="/bookreader/:id" element={<BookReader />} />
    </Routes>
  );
}
