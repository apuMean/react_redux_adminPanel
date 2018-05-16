import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import GoogleMap from '../components/mapComponent';
import BarChart from '../components/bchartComponent';
import UserList from '../containers/userlist'


const Routing = () => (
    <div>
        <Route exact path='/map' component={GoogleMap} />
        <Route exact path='/barChart' component={BarChart} />
        <Route exact path='/users' component={UserList}/>
    </div>

);
export default Routing;