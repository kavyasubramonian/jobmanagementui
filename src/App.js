import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import ForgotPassword from './components/Login/ForgotPassword';
import UserProfile from './view/Applicant/UserProfile';
import CreateJobs from './view/Employer/crtjobs';
import EmployerDashboard from "./view/Employer/Dashboard";
import ApplicantDashboard from "./view/Applicant/Dashboard";
import Applied from "./view/Applicant/Applied"
import Applicants from "./view/Employer/Applicant"
import Userprofile from './view/Employer/UserProfile';
import ApplicantSignUp from './components/SignUp/ApplicantSignUp';
import EmployerSignUp from './components/SignUp/EmployerSignUp';
import Logo from './components/SignUp/Logo'
import Resume from './components/SignUp/Resume'
import PrimarySearchAppBar from './apbar';
import withRoot from './modules/withRoot';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

//--------DISTINGUISH NEW APP.JS---------
// --- Post bootstrap -----
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import SearchForm from './components/Search/Search';
import AppAppBar from './modules/views/AppAppBar';
import Footer from './components/Footer/Footer';
import themes from './modules/theme';


//const browserHistory = createBrowserHistory();
//      <ProductValues />

class App extends React.Component {
  constructor(props) {
    super(props);
    this.main = React.createRef();}

    renderMain() {
      return ( 
      <div> 
      <ThemeProvider theme={themes}>
      <React.Fragment>
      <PrimarySearchAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
      </React.Fragment>
      </ThemeProvider>
      </div> 
);}

    render() {
      return (
        <div className="App">
        <ThemeProvider theme={theme}>
          <Router>
          <Switch>
            {/* <Route exact path='/' component={() => this.renderMain()} /> */}
            <Route exact path='/' component={() => this.renderMain()} />
            <Route path='/SignUp' component={SignUp} />
            <Route path='/search' component={SearchForm} />
            <Route path='/login' component={Login} />
            <Route path='/forgotpassword' component={ForgotPassword} />
            <Route path='/UserProfile' component={UserProfile} />
            <Route path='/EmpProfile' component={Userprofile} />
            <Route path='/CreateJobs' component={CreateJobs} />
            <Route path='/ApplicantDashboard' component={ ApplicantDashboard } />
            <Route path='/EmployerDashboard' component={ EmployerDashboard } />
            <Route path='/Applicants' component={ Applicants } />
            <Route path='/Logo' component={ Logo } />
            <Route path='/Resume' component={ Resume } />
            <Route path="/AppliedJobs" component={ Applied } />
            <Route path='/Employer' component={ EmployerSignUp } />
            <Route path='/Applicant' component={ ApplicantSignUp } />
            <Route render={() => <h1>Page not found</h1>} /> 
          </Switch>
          </Router>
        </ThemeProvider>
        </div>);
    }}

export default withRoot(App);