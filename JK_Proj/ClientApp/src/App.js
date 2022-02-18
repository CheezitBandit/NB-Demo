import React, { Component, useState } from 'react';
import { Route } from 'react-router';
import { Header } from './components/Header';
import { FindLocation } from './components/FindLocation';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import canUrl from './img/cans.png';
import packUrl from './img/pack.jpg';
import './styling/custom.css'


function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div class="flex-container">
            <div>
                <h2>SUPER HARD <br /> VARIETY PACK</h2>
                <p>Introducing <strong>The New</strong> Fruit Smash Super Hard Seltzer. A boozy seltzer made with real juice for a bolder taste that packs a punch.</p>
                <button onClick={handleShow}>
                    LEARN MORE >>>
                </button>

                <Modal isOpen={show}>
                    <ModalHeader>
                        <h2>
                            Fruit Smash Super Hard Seltzer
                        </h2>
                    </ModalHeader>
                    <ModalBody><em>More information coming soon!</em></ModalBody>
                    <ModalFooter>
                        <button onClick={handleClose}>
                            Close
                        </button>
                    </ModalFooter>
                </Modal>
            </div>
            <div>
                <img src={packUrl} alt="Pack" />
            </div>
        </div>
    );
};

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
        <div>
            <Header />
            <img class="Center" src={canUrl} alt="Cans" />
            <Route path='/findLocation' component={FindLocation} />
            <Home />
        </div>
    );
  }
}
