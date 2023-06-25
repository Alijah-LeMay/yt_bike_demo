import React from 'react'

import classes from './DisplayScreen.module.css'
import beach_ocean from '../../assets/beach_ocean.jpg'
import beach_sunset from '../../assets/beach_sunset.jpg'
import beach_city from '../../assets/beach_city.jpg'
import beach_feet from '../../assets/beach_feet.jpg'

const DisplayScreen = () => {
  return (
    <div className={classes.displayScreenContainer}>
      <div className={classes.column}>
        <img src={beach_ocean} alt='beach near the ocean' />
      </div>
      <div className={classes.columnTwo}>
        <div className={classes.imageRow}>
          <img src={beach_sunset} alt='sunset near the beach' />
        </div>
        <div className={classes.imageRow}>
          <img src={beach_city} alt='sunset near the beach' />
        </div>
        <div className={classes.imageRow}></div>
      </div>
      <div className={classes.column}>
        <img src={beach_feet} alt='beach near the ocean' />
      </div>
    </div>
  )
}

export default DisplayScreen
