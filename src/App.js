import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
 import Landing from './components/Landing';
 import Library from './components/Library';
 import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
         <header>
           <div className="nav">
              <div className="logo">
                <Link to='/'>
                        <img src="assets/images/bloc_jams_logo.png" alt="Home"></img>
                </Link>
              </div>
           
              <div className='library'>  
                <Link to='/library'>
                    <h2>Library</h2>
                </Link>
              </div>

              <Link to='/'>
                  <h1 id="Title">Bloc Jams React</h1>
              </Link> 
           </div>
           
         </header>

         <main>
           <Route exact path="/" component={Landing} />
           <Route path="/library" component={Library} />
           <Route path="/album/:slug" component={Album} />
         </main>
      </div>
    );
  }
}

export default App;
