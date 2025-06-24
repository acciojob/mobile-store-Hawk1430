import React from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ProductList from "./ProductList";
import AdminPanel from "./AdminPanel";
import ProductDetails from "./ProductDetails";

const App = () => {
  const navStyle = {
    background: "#282c34",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff"
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold"
  };

  const linkHover = {
    textDecoration: "underline"
  };

  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <h2 style={{ color: "#61dafb", margin: 0 }}>📱 Mobile Store</h2>
        <ul style={ulStyle}>
          <li>
            <Link to='/' data-cy="nav-home" style={linkStyle}>Home</Link>
          </li>
          <li>
            <Link to='/admin' data-cy="nav-admin" style={linkStyle}>Admin</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/admin' component={AdminPanel} />
        <Route exact path='/products/:id' component={ProductDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
