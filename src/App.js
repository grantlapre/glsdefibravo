import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'; 
import Container from 'react-bootstrap/Container';
import {useWeb3Contract} from 'react-moralis';
import Cards from './components/cards';


function App() {
  const {runContractFunction} = useWeb3Contract();



  return (
    <div className="App">
      <Header />
      
      <Container>
       
          <h1 classname="header">GLSDefi Bravo Project</h1>
          <h3 classname="header">Contract Address:</h3>
          <h6 classname="header">0xa7bE0301229f49d6ec999D22fdBea20fc3Dbdd7E</h6>
       
          <h4>Current State: Paused...</h4>


 
      </Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Real World Asset Tokenization NFT  
        </p>       
        <Cards />
        <a
          className="App-link"
          href="https://glsdefi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GLSDefi Bravo Project Launching 17/2/2024
        </a>
      </header>
      
    </div>
    
  );
}

export default App;