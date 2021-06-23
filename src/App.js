import React from 'react';
import './css/style.css';
import './css/examples.css';
import './css/info.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllLink from './allLink';

import First from './first';
import Introduction from './intro';

// Chapters
import Variables from './Chapters/variables';
import DataTypes from './Chapters/datatypes';
import DecisionMaking from './Chapters/decisionMaking';
import Loops from './Chapters/loops';
import Operators from './Chapters/operators';
import Functions from './Chapters/function';
import Enumeration from './Chapters/enumeration';
import Classes from './Chapters/classes';

import Examples from './examples';
import CheatSheet from './cheatsheet';
import Glossary from './glossary';
import MyInfo from './info';


function App() {
    return (
        <Router>
            <div>
                <AllLink />
                <Switch>
                    <Route path="/" exact component={First} />
                    <Route path="/intro" component={Introduction} />

                    <Route path="/variables" component={Variables} />
                    <Route path="/datatypes" component={DataTypes} />
                    <Route path="/decisionMaking" component={DecisionMaking} />
                    <Route path="/loops" component={Loops} />
                    <Route path="/operators" component={Operators} />
                    <Route path="/function" component={Functions} />
                    <Route path="/enumeration" component={Enumeration} />
                    <Route path="/classes" component={Classes} />

                    <Route path="/examples" component={Examples} />
                    <Route path="/cheatsheet" component={CheatSheet} />
                    <Route path="/glossary" component={Glossary} />
                    <Route path="/info" component={MyInfo} />

                </Switch>
            </div>

            <footer>
                <div className="copyright">© 2020 by Aakash Shrestha.</div>
            </footer>
        </Router>

    );
}


export default App;

