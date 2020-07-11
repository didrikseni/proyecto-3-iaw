import React from 'react'
import './css/App.css'
import './css/navbar.css'
import Navbar from './navbar'
import PageContent from './PageContent'
import Footer from './Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = []
  }

  render() {
    return (
      <body>
        <Navbar isLoggedIn={true} username={'Ian Didriksen'} email={'iandidri@gmail.com'} />
        <PageContent isLoggedIn={true} username={'Ian Didriksen'} email={'iandidri@gmail.com'} />
        <Footer />
      </body>
    )
  }
}

export default App
