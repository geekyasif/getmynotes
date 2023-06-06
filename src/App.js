import { Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import Dashboard from "./pages/admin/Dashboard";
import Signin from "./pages/authentication/Signin";
import Signup from "./pages/authentication/Signup";
import Navigation from "./components/Navigation";
import Notes from "./pages/user/Notes";
import Contact from "./pages/Contact";
import AuthRoute from "./routes/AuthRoute";
import AdminRoute from "./routes/AdminRoute";
import AdSense from 'react-adsense';


function App() {
 
  return (
    <>
      <Navigation />
      <AdSense.Google
        client="pub-8586139549834082"
        slot="9467877356"
      />
      <Routes>
        <Route element={<AuthRoute />}> </Route>
        <Route element={<AdminRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
          <Route path="notes" element={<Notes />} />
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
