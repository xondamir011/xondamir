import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Product from './components/Product';

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <Outlet />
      <Product search={search}/>
    </div>
  );
};

export default App;