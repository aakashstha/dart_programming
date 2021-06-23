import React from 'react';
import {Link} from 'react-router-dom';

 
function AllLink() {

    return (
        <div>
            <header className="header-section">
                
                <div className="novice">
                    <h3 className="mainhead">The Dart <br />Programming <br />Language 
                    <div className="dartVersion">DART 2.7</div></h3>
                    
                </div>
                
                <div className="novice2">
                    <h2 className="welcome">Welcome To Dart For Novice!</h2>
                </div>
        
            </header>

            <nav className="nav-links">
                <div id="tableOfContent">
                    <ul>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/intro'>
                            <li>Introduction</li>
                        </Link>

                        {/*
                         All the Dart Programming Chapters 
                        */}
                        <div className="all-chapters">

                            <p className="name">Chapters__</p>
                            <Link to='/variables'>
                                <li>Variables</li>
                            </Link>
                            <Link to='/datatypes'>
                                <li>DataTypes</li>
                            </Link>
                            <Link to='/decisionMaking'>
                                <li>Decision Making</li>
                            </Link>
                            <Link to='/loops'>
                                <li>Loops</li>
                            </Link>
                            <Link to='/operators'>
                                <li>Operators</li>
                            </Link>
                            <Link to='/function'>
                                <li>Function</li>
                            </Link>
                            <Link to='/enumeration'>
                                <li>Enumeration</li>
                            </Link>
                            <Link to='/classes'>
                                <li>Classes</li>
                            </Link>
                        </div>

                        <Link to='/examples'>
                            <li>Examples</li>
                        </Link>
                        <Link to='/cheatsheet'>
                            <li>CheatSheet</li>
                        </Link>
                        <Link to='/glossary'>
                            <li>Glossary</li>
                        </Link>
                        <Link to='/info'>
                            <li>My-Info</li>
                        </Link>
                    </ul>
                </div>
            </nav>
            
        </div>
    );
}

export default AllLink;