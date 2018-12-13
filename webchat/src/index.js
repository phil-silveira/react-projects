import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import { Router, Switch, Route, Redirect } from 'react-router'

import Home from './scenes/Home'
import PublicChat from './scenes/PublicChat'

import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/public/:nickname' component={PublicChat} />
            <Route path='/public' component={PublicChat} />
            <Redirect to='/' />
        </Switch>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
