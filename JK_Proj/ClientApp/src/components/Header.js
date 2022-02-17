import React from 'react';
import './Header.css';
import heroUrl from '../img/hero.jpg';
import canUrl from '../img/cans.png';


export class Header extends React.Component {
    static displayName = Header.name;

    constructor(props) {
        super(props);
        }

    render() {
        return (
            <div>
            <img class="Header" src={heroUrl} alt="Header" />
            <img class="Center" src={canUrl} alt="Cans" />
</div>
                );
    }
}