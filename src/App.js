import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Dodaj from './Dodaj/Dodaj';
import Error from './Error/Error';
import Wykres from './pages/Wykres/Wykres';
import Settings from './pages/settings/Settings';
import Home from './pages/home/Home';

import Decyzja from './pages/decyzja/Decyzja';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Write from "./pages/write/Write";
import { Context } from "./context/Context";

import { useContext } from "react";
import SinglePost from './components/singlePost/SinglePost';
import Pagination1 from './components/pagination/Pagination1';

import Chart2 from './components/chart/Chart2';
import Chart3 from './components/chart/Chart3';
import Homeclone from './pages/home/homeclone';

const App = () => {
  const { user } = useContext(Context);
  console.log(user)
  return (
   <Router>  
   <Navbar />      
   <Switch>

  <Route exact path="/">{  <Home /> : <Register />}</Route>
  
  <Route path="/clone">{<Homeclone /> : <Register />}</Route>
   <Route path="/dodaj/:id">{ <Dodaj /> : <Register />}</Route>
   <Route path="/wykres">{<Wykres/> : <Register />}</Route>
   <Route path="/decyzja">{ <Decyzja /> : <Register />}</Route>
   <Route path="/register">{<Register /> : <Register />}</Route>
   <Route path="/settings">{<Settings /> : <Register />}</Route>
   <Route path="/write">{<Write /> : <Register />}</Route>
   <Route path="/login"><Login /></Route>
  <Chart2 />
  <Chart3 />
    <Route path="/post/:postId">{user ? <SinglePost /> : <Register />}</Route>
     <Route exact path="*">{user ? <Error />: ''}</Route>
 {/*

   
    <Route exact path="/" component={Home}/>
    <Route exact path="/dodaj/:id" component={Dodaj}/>
    <Route  exact path="/wykres"> {user ? <Wykres/> : <Register />} </Route>
    <Route  exact path="/decyzja" component={Decyzja} />
    <Route  exact path="/register" component={Register} />
    <Route  exact path="/login" component={Login} />
    <Route  exact path="/home" component={Home} />
  <Route  exact path="*" component={Error} />*/}
   
 
   </Switch>
   </Router>
  
   
  )
}

export default App