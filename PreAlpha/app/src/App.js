import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router";

import {PageExample} from "./PageExample.js";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <div>
          <p>Hello World!</p>
          <img src="https://i.pinimg.com/originals/88/14/9b/88149b0400750578f4d07d9bc3fb0fee.gif" />
  
          <p>BEauTifUl</p>
          <h2>slay</h2>
          <p>Testing with react -Rachel</p>
          <Link to="/"><button>home</button></Link>
          <Link to="/other_page1"><button>Other Page 1</button></Link>
          <Link to="/other_page2"><button>Other Page 2</button></Link>
        
        </div>
        } />

        <Route exact path="/other_page1" element={
          <div>
          <p>Hello World!</p>
            <h2> This is what another <s>pigeon</s> page could look like</h2>
            <img src="https://i.pinimg.com/736x/30/40/01/304001b2e26635f0e6587bddbdac3bce.jpg" />
            <Link to="/"><button>home</button></Link>
            <Link to="/other_page1"><button>Other Page 1</button></Link>
            <Link to="/other_page2"><button>Other Page 2</button></Link>
          </div>
        }/>
        <Route exact path="/other_page2" element={ <PageExample />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
