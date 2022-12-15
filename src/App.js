import React from 'react';
import Header from './Header';
import Home from './Home';
import Login from './Login';

function App() {
  const { pathname } = window.location;

  let Component = Home;
  if (pathname === '/login') {
    Component = Login;
  }

  return (
    <>
      <Header />
      <Component />
    </>
  );
}

export default App;
