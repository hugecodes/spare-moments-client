import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Root from './components/Root/Root.js';
import App from './components/App/App.js';
import Register from './components/Register/Register.js';
import Skills from './components/Skills/Skills.js';
import ReadySkills from './components/ReadySkills/ReadySkills.js';
import Time from './components/Time/Time.js';
import Location from './components/Location/Location.js';
import Thanks from './components/Thanks/Thanks.js';
import Moment from './components/Moment/Moment.js';
import Done from './components/Done/Done.js';
import NotFound from './components/NotFound/NotFound.js';
import Success from './components/Success/Success.js';

import spareMomentsApp from './reducers';

import './assets/fonts/stylesheet.css';
import './assets/index.css';

let store = createStore(spareMomentsApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path="/" component={ Root } >
        <IndexRoute component={ App } />
        <Route path="register">
          <IndexRoute component={ Register } />
          <Route path="skills" component={ Skills }/>
          <Route path="success" component={ Success }/>
        </Route>
        <Route path="ready">
          <IndexRoute component={ ReadySkills } />
          <Route path="time" component={ Time }/>
        </Route>
        <Route path="moment">
          <IndexRoute component={ Moment } />
          <Route path="location" component={ Location } />
          <Route path="thanks" component={ Thanks } />
          <Route path="done" component={ Done } />
        </Route>
      </Route>
      <Route path="*" component={ NotFound } />
    </Router>
  </Provider>,
  document.getElementById('root')
);
