
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './contexts/AuthProvider';
import Items from './Components/Items';
import AboutUs from './Components/AboutUs';
import ExploreUs from './Components/ExploreUs';
import Footer from './Components/Footer';
import Details from './Components/Details';
import Error from './Pages/Error';
import MyOrders from './Pages/MyOrders';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/items'>
              <Items></Items>
            </Route>
            <Route path='/items/:id'>
              <Details></Details>
            </Route>
            <Route path='/aboutus'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/exploreus'>
              <ExploreUs></ExploreUs>
            </Route>
            <Route path='/myorders'>
              <MyOrders></MyOrders>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
