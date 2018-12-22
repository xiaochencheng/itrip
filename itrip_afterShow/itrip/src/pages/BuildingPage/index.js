import React from 'react'
import './style.css'
import loginLogo from './imgs/build.jpg'

export default class BuildingPage extends React.Component {


  render () {
    return (
      <div className='building'>
        <img src={loginLogo} alt=""/>
      </div>
    )
  }
}
