import React from 'react';
import './App.css';
import cryptoCastle  from "./images/crypto-castle.jpg";
import consensus2019 from './images/consensus-2019.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Erick Pinos
      </header>

      <div class="content container">

      <div class="row mt-5 mb-5 p-1">
        <div class="col-12 text-center">
          <img src={consensus2019}
            alt="consensus-2019"
            style={{width: 'auto', maxWidth: '100%'}} />
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col-12 text-center">
          <h2>Erick's Mission</h2>
        </div>
        <div class="col-12">
          Using the technology of the future, including blockchain, virtual reality, to make a socio-economic impact.
          Growing open-source technology and open-source communities centered around innovation.
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col-12 text-center">
          <h2>Bio</h2>
        </div>
        <div class="col-12">
        <p>
          Erick Pinos is the Americas Ecosystem Lead at Ontology Network, spearheading blockchain-based decentralized identity solutions for both individuals and enterprises. He has also been the President of BEN (Blockchain Education Network) for two years, onboarding dozens of new student-run blockchain clubs and speaking at various conferences about blockchain education.
        </p>
        <p>
          He holds a degree in Management from MIT with a concentration in Entrepreneurship. At MIT, Erick was the President of the MIT Bitcoin Club and Co-Director of the 2018 MIT Bitcoin Expo. Erick was also a researcher at the MIT Digital Currency Initiative, designing tokenized renewable energy solar microgrids. After graduating, he did an internship on Nasdaq’s blockchain team and technical due diligence for the crypto investment firm Game Theory Group.
        </p>
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col-12 text-center">
          <h2>Podcast Appearances</h2>
        </div>
        <div class="col-12 text-center">
          <div><a href="https://www.youtube.com/watch?v=6Cr0UiSILHA">Tech Talks Daily Podcast Interview (by Neil Hughes)</a></div>
          <div><a href="https://thegsm.co/2020/05/bitcoin-halving-and-a-pulse-check-of-the-global-blockchain-ecosystem/">Global Startup Movement Podcast Interview (Andrew Berkowitz)</a></div>
          <div><a href="https://podcasts.apple.com/gb/podcast/how-blockchain-will-change-academia-and-education/id1476856904?i=1000478790696">DIVI Crypto Podcast Interview (by Steve McGarry)</a></div>
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col-12 text-center">
          <h2>Social Media</h2>
        </div>
        <div class="col-12 text-center">
        <span>
          <a href="https://twitter.com">Twitter</a>
        </span>
        </div>
      </div>

      </div>

    </div>
  );
}

export default App;
