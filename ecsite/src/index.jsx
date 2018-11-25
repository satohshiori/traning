import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import EcSite from './component/ecsite';


class App extends React.Component {
    render(){
    return (
        <EcSite />
    );
}
}

ReactDOM.render(<App />, document.getElementById('root'));