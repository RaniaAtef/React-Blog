import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import AddForm from "./components/AddForm";
import BlogContent from "./pages/BlogContent";
import UserContext from "./context/userContext";
import EditForm from "./components/EditForm";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header />
        <div className="min-h-[50vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/AddPost" element={<AddForm />} />
            <Route path="/edit/:id" element={<EditForm />} />
            <Route path="/blog/:id" element={<BlogContent />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
