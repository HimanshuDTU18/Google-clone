import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import Search from './Search'


function Home() {

  



  return (
    <div className="home">
      <div className="home__header">
          <div className="home__headerLeft">
              <Link to='/about'>About</Link>
              <Link to='/store'>Store</Link>
          </div>
          <div className="home__headerRight">
              <Link to='/gmail'>Gmail</Link>
              <Link to='/images'>Images</Link>
              <AppsIcon/>  
              <AccountCircleTwoToneIcon/>
              
          </div>
      </div>

      <div className="home__body">
        <img 
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google"/>
            <div className="input__Container">
              <Search button={true}/>
            </div>
      </div>
    </div>
  )
}

export default Home