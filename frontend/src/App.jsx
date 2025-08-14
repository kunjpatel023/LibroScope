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
import PrivateRoute from "./utils/PrivateRoute";

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} />

      {/* Pages that use the Sidebar layout */}
      <Route element={<AppLayout />}>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/categories" element={ <PrivateRoute><Categories /></PrivateRoute>} />
        <Route path="/summarytranslation" element={<PrivateRoute><SummaryTranslation /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
        <Route path="/subscription" element={<PrivateRoute><Subscription /></PrivateRoute>} />
      </Route>

      {/* Reading page WITHOUT Dashboard layout */}
      <Route path="/bookreader/:id" element={<PrivateRoute><BookReader/></PrivateRoute>} />
    </Routes>
  );
}
