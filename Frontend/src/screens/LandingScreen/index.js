import React from 'react'
import classes from './LandingScreen.module.css'
import bike_image from '../../assets/bike_gradient.png'

const LandingScreen = () => {
  return (
    <div className={classes.landingScreenContainer}>
      <img src={bike_image} alt='Check out this amazing beach cruiser!' />
    </div>
  )
}

export default LandingScreen
