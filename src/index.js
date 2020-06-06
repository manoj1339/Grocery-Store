import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import Nav from './components/Nav';
import About from './components/about';
import Contact from './components/contact';
import Cart from './components/cart';
import Login from './components/login';
import Register from './components/register';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { ProtectedRoute } from './protectedRoute';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import all_reducers from './reducers/';

const myStore = createStore(all_reducers);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
        <Router>
            <Nav />
            <Route path='/' component={Home} exact >
                <Home />
            </Route>
            <Route path='/contact' component={Contact} exact >
                <Contact />
            </Route>
            <Route path='/about' component={About} exact >
                <About />
            </Route>
            <Route path='/cart' component={Cart} exact >
                <Cart />
            </Route>
            <Route path='/login' render={(props) => <Login {...props} />} exact />
            <Route path='/register' render={(props) => <Register {...props} />} exact />
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
