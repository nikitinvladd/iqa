import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main/main';
import WhatWeDo from './components/what-we-do/whatwedo';
import Purpose from './components/purpose/purpose';
import Konsultation from './components/konsultation/consultation';
import Header from './components/header/header';
import AboutUs from './components/about/about';
import Footer from './components/footer/footer';
import WebApp from './components/webapp/webapp';
import Bots from './components/bots/bots';
import Websites from './components/websites/websites';
import Ads from './components/ads/ads';
import Services from './components/services/services';
import WhoWeAre from './components/whoweare/whoweare';
import WeCanHelp from './components/wecanhelp/wecanhelp';
import './App.css';


function App() {
  return (
        <Router>
              <div className="App">
              <Header/>
          <Switch>
                <Route exact path="/">
                      <Main/>
                      <WhoWeAre/>
                      <Services/>
                      <WeCanHelp/>
                      <Footer/>
                </Route>
                    <Route exact path="/consultation">
                      <Konsultation/>
                      <Footer/>
                    </Route>
                    <Route exact path="/webapp">
                      <WebApp/>
                      <Footer/>
                    </Route>
                    <Route exact path="/bots">
                      <Bots/>
                      <Footer/>
                    </Route>
                    <Route exact path="/websites">
                      <Websites/>
                      <Footer/>
                    </Route>
                    <Route exact path="/ads">
                      <Ads/>
                      <Footer/>
                    </Route>
                    <Route exact path="/offer">
                      <WebApp/>
                      <Bots/>
                      <Ads/>
                      <Websites/>
                      <Footer/>
                    </Route>
                    <Route exact path="/about">
                      <AboutUs/>
                      <WhatWeDo/>
                      <Purpose/>
                      <Footer/>
                    </Route>
          </Switch>
      </div>
      </Router>
  );
}
export default App; 
