import React, { useState } from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ProductList from "./ProductList";
import AdminPanel from "./AdminPanel";
import ProductDetails from "./ProductDetails";

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/admin' >Admin</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path='/' component ={ProductList}/>
        <Route exact path='/admin' component ={AdminPanel}/>
        <Route exact path='/products/:id' component ={ProductDetails}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
