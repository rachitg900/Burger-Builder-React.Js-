import React from 'react';
import './App.css';
import Layout from './component/Layout/Layout';
import BurgerBuilder from './containers/Burgerbuilder/BurgerBuilder'

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
