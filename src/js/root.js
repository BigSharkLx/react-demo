import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import {Router,Route,hashHistory} from 'react-router';
import{Button} from 'antd';
import 'antd/dist/antd.css';
import PCIndex from './components/pc_index.js';
import MobileIndex from './components/mobile_index.js';
import RegistrationForm from './components/common_register.js';
import PCNewsDetails from './components/pc_news_details.js';
import PCPerson from './components/person.js';
import MobileNewsDetails from './components/mobile_news_details.js';
import MobileRegistrationForm from './components/mobile_register.js';
import MobilePerson from './components/mobile_person.js';
export default class Root extends React.Component{
  render(){
    return(
    <div>
    <MediaQuery query='(min-device-width:1224px)'>
    <Router history={hashHistory}>
    <Route path="/" component={PCIndex}/>
    <Route path="/register" component={RegistrationForm}/>
    <Route path="/details/:uniquekey" component={PCNewsDetails}/>
    <Route path="/person" component={PCPerson}/>
    </Router>
    </MediaQuery>
    <MediaQuery query='(max-device-width:1224px)'>
    <Router history={hashHistory}>
    <Route path="/" component={MobileIndex}/>
      <Route path="/register" component={MobileRegistrationForm}/>
      <Route path="/details/:uniquekey" component={MobileNewsDetails}/>
      <Route path="/person" component={MobilePerson}/>
    </Router>
    </MediaQuery>
    </div>
    );
  }
}
ReactDOM.render(
  <Root/>,document.getElementById('mainContainer')
);
