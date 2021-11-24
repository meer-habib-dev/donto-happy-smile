import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Pages/Context/AuthProvider";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Login/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Contact from "./Pages/Contact/Contact";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./Pages/Shared/PrivateRoute/PrivateRoute";
import ServiceBlog from "./Pages/Home/ServiceBlog/ServiceBlog";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header> </Header>
          <Switch>
            <Route exact path="/">
              <Home> </Home>
            </Route>
            <Route path="/home">
              <Home> </Home>
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/service">
              <ServiceBlog></ServiceBlog>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login> </Login>
            </Route>
            <Route path="/register">
              <Register> </Register>
            </Route>
            <Route path="*">
              <NotFound> </NotFound>
            </Route>
          </Switch>
          <Footer> </Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
