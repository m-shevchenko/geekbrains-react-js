import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <h1>First Application with React</h1>;
    }
}
;
ReactDOM.render(<App/>, document.getElementById('root'));


class  Developer extends React.Component {
    render() {
        return <p>Shevchenko Maria</p>;
    }
}
;
ReactDOM.render(<Developer/>, document.getElementById('developer'));


