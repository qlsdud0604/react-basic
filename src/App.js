import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';
import { Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';

function App() {
  return (
    <div>
      {/* <Navigation /> */}
      {/* <Route path="/" exact={true} component={HomePage} />
      <Route path="/login/:id" exact={true} component={LoginPage} /> */}
      {/* <Route path="/" exact={true} component={ListPage} />
      <Route path="/write" exact={true} component={WritePage} /> */}
      <ListPage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
