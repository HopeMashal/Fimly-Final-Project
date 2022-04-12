import { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AuthContext } from "./context/AuthContext";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./pages/Catalog/Catalog";
import Details from "./pages/Details/Details";

function App() {
  const {user}=useContext(AuthContext)
  return (
    <Router>
      <Navbar/>
      <Switch>
        {/* <Route exact path="/">
          {user ? <Home/> : <Register/>}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/> :<Login/>}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/"/> :<Register/>}
        </Route>
        <Route path="/forget">
          {user ? <Redirect to="/"/> :<ForgetPassword/>}
        </Route> 
        <Route path='/:category/search/:keyword'>
          {user ? <Catalog/> : <Register/>}
        </Route>
        <Route path='/:category/:id'>
          {user ? <Details/> : <Register/>}
        </Route>
        <Route path='/:category'>
          {user ? <Catalog/> : <Register/>}
        </Route> */}
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/forget">
          <ForgetPassword/>
        </Route>
        <Route path='/:category/search/:keyword'>
          <Catalog/>
        </Route>
        <Route path='/:category/:id'>
          <Details/>
        </Route>
        <Route path='/:category'>
          <Catalog/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
