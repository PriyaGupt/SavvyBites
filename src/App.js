import "./App.css";
import { Routes,Route} from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import VerifyEmail from "./pages/VerifyEmail";
import PrivateRoute from "./core/PrivateRoute";
import Home from "../src/pages/Home"

function App() {
  const { user } = useSelector((state) => state.auth)
  return (
    
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route
          path="signup"
          element={        
              <SignupForm />         
          }
        />
    <Route
          path="login"
          element={          
              <LoginForm />
          }
        />
    <Route
          path="forgot-password"
          element={
            //<OpenRoute>
              <ForgotPassword />
            //</OpenRoute>
          }
        />  

      <Route
          path="verify-email"
          element={
            //<OpenRoute>
              <VerifyEmail />
            //</OpenRoute>
          }
        />  

    <Route
          path="update-password/:id"
          element={
              <UpdatePassword />
            //</OpenRoute>
          }
        />  
      
     <Route path="*" element={"error"} />
    </Routes>
  );
}

export default App;
