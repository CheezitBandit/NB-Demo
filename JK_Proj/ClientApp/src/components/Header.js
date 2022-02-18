import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Header.css';

export class Header extends React.Component {
    static displayName = Header.name;

    constructor(props) {
        super(props);
        }

    render() {
        return (
            <div class="cat">
                <div class="text">
                    <h1>SAY BYE</h1>
                    <h2>TO BASIC SELTZERING</h2>
                    <Link to="/FindLocation">
                        <button type="button">
                            FIND NEAR YOU >>>
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}