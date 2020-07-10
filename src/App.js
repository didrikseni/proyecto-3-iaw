import React from 'react';
import './css/App.css';
import './css/navbar.css';
import Navbar from './navbar';
import PageContent from './PageContent';
import Footer from './Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <body>
                <Navbar isLoggedIn={true} name="ian" />
                <PageContent />
                <Footer />
            </body>
        );
    }
}

export default App;
