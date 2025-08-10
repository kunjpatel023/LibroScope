// import React from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import AuthProvider, { useAuth } from './context/AuthContext'
// import useDarkMode from './hooks/useDarkMode'

// import LandingPage from './pages/LandingPage'
// import LoginPage from './pages/LoginPage'
// import SignupPage from './pages/SignupPage'
// import Dashboard from './pages/Dashboard'
// import BookReader from './pages/BookReader'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Subscription from './pages/Subscription'

// function RequireAuth({ children }) {
//   const { user } = useAuth()
//   if (!user) return <Navigate to="/login" replace />
//   return children
// }

// export default function App() {
//   const [dark, setDark] = useDarkMode()

//   return (
//     <AuthProvider>
//       <div className={`${dark ? 'dark bg-bg-dark text-gray-100' : 'bg-bg-light text-gray-900'} min-h-screen`}>
//         <Routes>
//           <Route path="/" element={<LandingPage toggleDark={() => setDark(v => !v)} dark={dark} />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />

//           <Route path="/dashboard/*" element={
//             <RequireAuth>
//               <Dashboard toggleDark={() => setDark(v => !v)} dark={dark} />
//             </RequireAuth>
//           } />

//           <Route path="/book/:id" element={<BookReader />} />

//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/subscription" element={<Subscription />} />

//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>
//     </AuthProvider>
//   )
// }


// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";

// export default function App() {
//   const [dark, setDark] = React.useState(false);

//   return (
//     <div className={`${dark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen`}>
//       <Routes>
//         <Route
//           path="/"
//           element={<LandingPage toggleDark={() => setDark(v => !v)} dark={dark} />}
//         />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </div>
//   );
// }




// // App.jsx
// import React from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import AuthProvider, { useAuth } from './context/AuthContext'
// import useDarkMode from './hooks/useDarkMode'

// // Pages
// import LandingPage from './pages/LandingPage'
// import LoginPage from './pages/LoginPage'
// import SignupPage from './pages/SignupPage'
// import Dashboard from './pages/Dashboard'
// import BookReader from './pages/BookReader'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Subscription from './pages/Subscription'

// // Route guard
// function RequireAuth({ children }) {
//   const { user } = useAuth()
//   if (!user) return <Navigate to="/login" replace />
//   return children
// }

// export default function App() {
//   const [dark, setDark] = useDarkMode()

//   return (<><AuthProvider>

//    <div className={`${dark ? 'dark bg-bg-dark text-gray-100' : 'bg-bg-light text-gray-900'} min-h-screen`}>
//         <Routes>
//           <Route path="/" element={<LandingPage toggleDark={() => setDark(v => !v)} dark={dark} />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />

//           <Route
//             path="/dashboard/*"
//             element={
//               <RequireAuth>
//                 <Dashboard toggleDark={() => setDark(v => !v)} dark={dark} />
//               </RequireAuth>
//             }
//           />

//           <Route path="/book/:id" element={<BookReader />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/subscription" element={<Subscription />} />

//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>
//  </AuthProvider>
//   </>
     
//   )
// }




// -------working--------
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Categories from "./pages/Categories";
// import SummaryTranslation from "./pages/SummaryTranslation";
// import Profile from "./pages/Profile";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Subscription from "./pages/Subscription";

// export default function App() {
//   return (
//       <Routes>
//         <Route path="/" element={<Navigate to="/dashboard" />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/summarytranslation" element={<SummaryTranslation />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/subscription" element={<Subscription />} />
//       </Routes>

//   );
// }
// -------------------------------------




// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import SummaryTranslation from "./pages/SummaryTranslation";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Subscription from "./pages/Subscription";
import Sidebar from "./components/Sidebar";
import LandingPage from "./pages/LandingPage";
import BookReader from "./pages/BookReader";
// import SignupPage from "./pages/LoginPage";
// import LoginPage from "./pages/SignupPage";
import Auth from "./pages/AuthPage";



function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {sidebarOpen && <Sidebar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />}
      <div className="flex-1 overflow-y-auto">
        {/* <header className="p-4 shadow bg-white flex items-center justify-between">
          

          <h1 className="font-bold text-lg">SmartShelf</h1>
        </header> */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}

export default function App() {
  return (

      <Routes>
        {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
        <Route path="/" element={<LandingPage></LandingPage>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/categories" element={<Layout><Categories /></Layout>} />
        <Route path="/summarytranslation" element={<Layout><SummaryTranslation /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/subscription" element={<Layout><Subscription /></Layout>} />
        <Route path="/bookreader" element={<BookReader></BookReader>} />
        {/* <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/auth" element={<Auth />} />
      </Routes>

  );
}
