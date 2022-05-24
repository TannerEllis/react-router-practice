import React from 'react';
import { useState } from 'react';
import './App.css';
import { Outlet, Link } from 'react-router-dom';

const App =() => {



  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices"><button>Invoices</button></Link> |{" "}
        <Link to="/expenses"><button>Expenses</button></Link>
      </nav>
      <Outlet/>
    </div>
  );
};

export default App;
