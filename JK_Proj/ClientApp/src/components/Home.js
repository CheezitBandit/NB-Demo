import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import packUrl from '../img/pack.jpg';
import '../styling/Home.css';

function Home() {
    return (
        <div class="flex-container">
            <div>
                <h2>SUPER HARD <br /> VARIETY PACK</h2>
                <p>Introducing <strong>The New</strong> Fruit Smash Super Hard Seltzer. A boozy seltzer made with real juice for a bolder taste that packs a punch.</p>
                <Popup trigger={<button>LEARN MORE >>></button>}
                    modal
                    position="center">
                    {close => (
                        <div>Text goes here</div>
                    )}
                </Popup>
            </div>
            <div>
                <img src={packUrl} alt="Pack" />
            </div>
        </div>
    );
};

export default Home;
