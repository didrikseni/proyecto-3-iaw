import React from 'react';
import './css/App.css';
import './css/navbar.css';
import Navbar from './components/header/navbar';
import PageContent from './components/page-content/PageContent';
import Footer from './components/footer/Footer';

import Login from './components/auth/Login';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }

    render() {
        if (this.state.redirect) {
            return <Login />;
        } else {
            return (
                <div>
                    <Navbar isLoggedIn={true} username={'Ian Didriksen'} email={'iandidri@gmail.com'} />
                    <PageContent isLoggedIn={true} username={'Ian Didriksen'} email={'iandidri@gmail.com'} />
                    <Footer />
                </div>
            );
        }
    }
}

export default App;
