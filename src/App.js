import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import SingleService from './components/SignleService/SingleService';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/service/:singleId">
            <SingleService></SingleService>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
