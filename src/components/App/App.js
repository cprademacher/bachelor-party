import React from 'react';
import './App.css';
import Main from '../Main/Main';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state= { 
            authorized: false,
            password: 'riazzi'
         };

        this.authorize = this.authorize.bind(this);
    }

    authorize(e) {
        const password = e.target.querySelector('#password').value;
        if (password === this.state.password) {
            this.setState({ authorized: true });
        }
    }

    render() {
        let login = (
            <form className="loginForm ui card" action="#" onSubmit={this.authorize}>
              <h2>Enter the Password</h2>
              <input id="password" className="ui input focus" type="password" placeholder="Password" />
              <input className="ui primary button" type="submit" />
            </form>
          )


        return (
            <div className="authorization">
                <h1 className="ui header">Riazzi Bachelor Party</h1>
                { this.state.authorized ? <Main /> : login }
            </div>
        )
    }
};

export default App;