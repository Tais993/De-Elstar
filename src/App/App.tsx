import React from 'react';
import logo from './de Elstar logo + tekst.png';
import './App.css';

export default function App() {

    return (
        <>
            <nav>
                <img id="logo" src={logo} alt="Logo"/>
                <form id="searchBarForm">
                    <label>
                        <input type="text" id="searchBar" placeholder="Naar wat voor fiets bent u op zoek?"/>
                    </label>
                </form>
                <div id="buttons">
                    <a className="signUpButton" href="https://tetris.dirkdev.com">Aanmelden</a>
                    <a className="signInButton" href="https://dirkdev.com">Inloggen</a>
                </div>
            </nav>
            <div className="slideBar">

            </div>
        </>
    );
}