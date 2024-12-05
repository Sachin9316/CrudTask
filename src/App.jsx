import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import NavBar from "./components/NavBar"
import Protected from "./pages/Protected"
import NotFoundPage from "./pages/NotFoundPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import Testimonial from "./pages/Testimonial"
import ForgotPage from "./pages/ForgotPage"
import RemovePage from "./pages/RemovePage"

const App = () => {
  return (
    <div className="mx-auto bg-indigo-700 min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Protected />} >
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/remove" element={<RemovePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App