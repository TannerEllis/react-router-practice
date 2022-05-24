import React from 'react';
import { useState } from 'react';
import './App.css';
import { Outlet, Link } from 'react-router-dom';

const App =() => {

  const [number, setNumber] = useState(0);

  function increment() {
    setNumber( prevNumber => prevNumber + 1)
  }
  function decrement() {
    setNumber( prevNumber => prevNumber - 1)
  }

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
        <br/>
        <button onClick={decrement}>-</button>
        <span>{number}</span>
        <button onClick={increment}>+</button>
      </nav>
      <Outlet/>
    </div>
  );
};

export default App;
