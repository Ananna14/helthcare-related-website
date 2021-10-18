import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Services from './pages/Home/Services/Services';
import About from './pages/Home/Services/About/About';
import Contact from './pages/Home/Services/Contact/Contact';
import Header from './Nav/Header';
import NotFound from './pages/Home/Services/NotFound/NotFound';
import Footer from './pages/Home/Services/NotFound/Footer/Footer';
import LogIn from './LogIn/LogIn';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/services">
<Services></Services>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
