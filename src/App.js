import React from 'react';
import AppHead from "./components/header.jsx";
import AppFoot from "./components/foot.jsx";
import Nav from "./components/nav.jsx"
import Home from "./components/home.jsx"
import ImgGallery from "./components/gallery.jsx"
import BookHall from "./components/calender.jsx"
import Contact from "./components/contactUs.jsx"
import './App.css';
import Logo from './legionImg007.png';
// 
// import { tsPropertySignature } from '@babel/types';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'Home'
    }
    }
    setPage = (string) => {
      this.setState({
        page: string
      })
    }
    render( ) {

    return (
      <div className="App">
      <header className="App-header">
     <AppHead/>
             <img alt="logo" src={Logo} id="footer-img" />
      </header>
     <Nav page={this.setPage}/>
      <body>
        {
            this.state.page === 'Home' ? ( <Home/>) : (null)
        }
        {
           this.state.page === 'Calender' ? ( <BookHall/>) : (null)
        }
        {
          this.state.page === 'Contact' ? ( <Contact/> ) : (null)
        }
        {
           this.state.page === 'Gallery' ? ( <ImgGallery/> ) : (null)
        }
      </body>
      <AppFoot/>
    </div>
  );
}
}

export default App;
