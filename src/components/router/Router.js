import {React, Route} from 'react';
import App from '../../App';

class Router extends React.Component{
    render(){
        return (
                <Route path="/test" Component={App}/>
        )
    }
}

export default Router