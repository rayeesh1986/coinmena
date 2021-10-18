import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './assets/scss/style.scss';
import Repos from './repos/Repos';
import Notfound from './notfound/Notfound';
import Developers from './developers/Developers';

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/*  component={Repos} */}
          <Router>
            <Switch>
              <Route exact path="/repos" render={() => <Repos title="Trending"
                discription="See what the GitHub community is most excited Today." />} />
              <Route exact path="/developers" render={() => <Developers title="Trending"
                discription="These are the developers building the hot tools today." />} />
              <Route path="/notfound" component={Notfound} />
              <Redirect to="/notfound" />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
