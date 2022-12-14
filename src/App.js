import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes/Routes";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Landing from "./pages/landing/Landing";
import Form from "./pages/form/Form";
import AddForm from "./pages/form/AddForm";
import ResultForm from "./pages/form/ResultForm";
import FillForm from "./pages/form/FillForm";
import FillStart from "./pages/form/FillStart";
import AboutUs from "./pages/about-us/AboutUs";
import Profile from "./pages/profile/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Landing />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/form"
          element={
            <PrivateRoute>
              <Form />
            </PrivateRoute>
          }
        />
        <Route
          path="/form/add-form"
          element={
            <PrivateRoute>
              <AddForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/form/detail-app/:id"
          element={
            <PrivateRoute>
              <FillStart />
            </PrivateRoute>
          }
        />
        <Route
          path="/form/result-form/:id"
          element={
            <PrivateRoute>
              <ResultForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/form/fill-form/:id"
          element={
            <PrivateRoute>
              <FillForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/about-us"
          element={
            <PrivateRoute>
              <AboutUs />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
