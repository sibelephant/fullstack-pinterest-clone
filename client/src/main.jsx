import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./routes/Homepage.jsx";
import CreatePage from "./routes/CreatePage.jsx";
import PostPage from "./routes/PostPage.jsx";
import AuthPage from "./routes/AuthPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ProfilePage from "./ProfilePage.jsx";
import SearchPage from "./routes/SearchPage.jsx";
import MainLayout from "./routes/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/pin/:id" element={<PostPage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
