import React, { Component } from 'react';
import packUrl from '../img/pack.jpg';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div class="flex-container">
            <div>
                <h1>SUPER HARD VARIETY PACK</h1>
                <p>Introducing <b> The New </b> Fruit Smash Super Hard Seltzer. A boozy seltzer made with real juice for a bolder taste that packs a punch.</p>
            </div>
            <div>
                <img src={packUrl} alt="Pack" />
            </div>
      </div>
    );
  }
}
