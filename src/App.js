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
          <Router>
            <Switch>
              <Route exact path="/repos" component={Repos} />
              <Route exact path="/developers" component={Developers} />
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
