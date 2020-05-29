import React, {Component, useRef}  from 'react';
import NavBar from './components/navbar';
import Sequence from './components/sequence';


function App()  {

    return <>
        <h1>Generalized Fibonacci Sequence</h1>
        <p>Compute Fibonacci sequence for any two staring sequence numbers</p>

        <main className="container">
            <Sequence  />
        </main>
     </>;
}
export default App;
