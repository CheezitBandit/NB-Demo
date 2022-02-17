import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import canUrl from '../img/cans.png';



export class Header extends React.Component {
    static displayName = Header.name;

    constructor(props) {
        super(props);
        }

    render() {
        return (
            <div>

                <div class="cat">
                    <div class="text">
                        <h1>Say Bye</h1>
                        <p>To basic seltzering</p>
                        <Link to="/FindLocation">
                            <button type="button">
                                Find Near You
                            </button>
                        </Link>
                    </div>
                </div>
                <img class="Center" src={canUrl} alt="Cans" />
            </div>
        );
    }
}