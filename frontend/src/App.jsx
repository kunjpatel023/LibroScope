import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
import AddBook from "./pages/AddBook";
import PageNotFound from "./pages/PageNotFound";


// ✅ Reusable wrapper for page animations
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // start hidden + from bottom
      animate={{ opacity: 1, y: 0 }} // fade in + center
      exit={{ opacity: 0, y: -40 }} // fade out + to top
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <LandingPage />
            </PageWrapper>
          }
        />
        <Route
          path="/auth"
          element={
            <PageWrapper>
              <Auth />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper>
              <PageNotFound/>
            </PageWrapper>
          }
        />

        {/* Pages that use the Sidebar layout */}
        <Route element={<AppLayout />}>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <PageWrapper>
                  <Dashboard />
                </PageWrapper>
              </PrivateRoute>
            }
          />
          <Route
            path="/categories"
            element={
              <PrivateRoute>
                <PageWrapper>
                  <Categories />
                </PageWrapper>
              </PrivateRoute>
            }
          />
          <Route
            path="/summarytranslation"
            element={
              <PrivateRoute>
                <PageWrapper>
                  <SummaryTranslation />
                </PageWrapper>
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <PageWrapper>
                  <Profile />
                </PageWrapper>
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <PageWrapper>
                  <About />
                </PageWrapper>
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              </PrivateRoute>
            }
          />
          <Route
            path="/subscription"
            element={
              <PrivateRoute>
                <PageWrapper>
                  <Subscription />
                </PageWrapper>
              </PrivateRoute>
            }
          />
          <Route
            path="/add-book"
            element={
              <PrivateRoute>
                <PageWrapper>
                  <AddBook />
                </PageWrapper>
              </PrivateRoute>
            }
          />
        </Route>

        {/* Reading page WITHOUT Dashboard layout */}
        <Route
          path="/bookreader/:id"
          element={
            <PrivateRoute>
              <PageWrapper>
                <BookReader />
              </PageWrapper>
            </PrivateRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

