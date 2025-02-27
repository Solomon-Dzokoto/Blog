import SignIn from "./Pages/Auth/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./Pages/Auth/SignUp"
import Home from './Pages/Home'
import FrontPage from "./Pages/FrontPage"
import Layout from './Components/Layout/Layout'
import CreateBlogPage from "./Pages/CreateBlogPage"
import UseProvider from "./context/useContextApi";
import Category from "./Pages/Category"
import Post from "./Pages/Post"
import RequiredUser from "./Components/RequiredUser"
import ContactUs from "./Pages/ContactPage"
import AboutUs from "./Pages/AboutUs"


const App = () => {
  return (
    <>
      <Router>
        <UseProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/user-home" element={<FrontPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/user-home/post/:id" element={<Post />} />
              <Route path="/"  element={<RequiredUser/>}>
                <Route path="/create/:id" element={<CreateBlogPage />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/category/:id" element={<Category />} />
              </Route>   
            </Route>
            <Route index element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </UseProvider>
      </Router>

    </>
  )
}

export default App