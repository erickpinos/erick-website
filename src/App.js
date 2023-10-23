import React from 'react';
import './App.css';
import consensus2019 from './images/consensus-2019.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Erick Pinos
          <h4>Ecosystem Growth Lead @ Nibiru | MIT 🦫</h4>
      </header>

      <div className="content container">

      <div className="row mt-5 mb-5 p-1">
        <div className="col-12 text-center">
          <img src={consensus2019}
            alt="consensus-2019"
            style={{width: 'auto', maxWidth: '50%'}} />
        </div>
      </div>

      <div className="row mt-5 mb-5 p-1">
        <div className="col-12 text-center">
          <h2>Follow Me</h2>
          <p>Stay updated with insights on AI and metaverse startups.</p>
          <a href="https://twitter.com/erickpinos">Twitter</a> | <a href="https://www.linkedin.com/in/erickpinos/">LinkedIn</a>
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-12 text-center">
          <h2>About Erick</h2>
        </div>
        <div className="col-12">
          <p>
            Erick Pinos is the Ecosystem Growth Lead at Nibiru and the President of BEN. He's an MIT graduate with a passion for the metaverse and AI. He has been an angel investor in various startups and tech initiatives.
          </p>
          <p>
            With a mission to use futuristic technologies for socio-economic impact, Erick is dedicated to growing open-source technology and communities centered around innovation.
          </p>
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-12 text-center">
          <h2>Experience & Education</h2>
        </div>
        <div className="col-12">
          <ul>
            <li>Ecosystem Growth Lead at Nibiru Chain</li>
            <li>President at BEN</li>
            <li>Ecosystem Lead, Americas at Ontology</li>
            <li>Lead Research Analyst at Game Theory Group</li>
            <li>Bachelor of Science, Management from Massachusetts Institute of Technology</li>
          </ul>
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-12 text-center">
          <h2>Recent Posts</h2>
        </div>
        <div className="col-12">
          <ul>
            <li><a href="https://www.linkedin.com/feed/update/urn:li:activity:7122267068883759105/">Why did YCombinator introduce SAFEs back in 2013?</a></li>
            <li><a href="https://www.linkedin.com/feed/update/urn:li:activity:7121843328312119296/">What's the difference between a Convertible note and a SAFE?</a></li>
          </ul>
        </div>
      </div>

      </div>

    </div>
  );
}

export default App;
