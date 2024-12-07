import SignIn from "./Pages/Auth/Login"
import { BrowserRouter as Router , Routes ,Route} from "react-router-dom"
import Signup from "./Pages/Auth/SignUp"
import Home from './Pages/Home'
import FrontPage from "./Pages/FrontPage"

const App =()=>{ 
    
   return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user-name" element={<FrontPage/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
