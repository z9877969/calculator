import React from 'react';
import {Link, withRouter, Route} from 'react-router-dom';


const Home = (props) => {
    const {match, location} = props;
    return ( 
        <div>
            <h1>Page Home</h1>
            

        </div>

     );
}
 
export default withRouter(Home);