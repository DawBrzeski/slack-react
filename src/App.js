import React from 'react';
import styled from "styled-components";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <>

          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat/>}>
              </Route>
            </Routes>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display: flex; 
height: 100vh; 
`;
