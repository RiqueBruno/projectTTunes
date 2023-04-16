import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
// Finalmente
class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Sidebar />
        <Content />
      </main>
    );
  }
}

export default App;
