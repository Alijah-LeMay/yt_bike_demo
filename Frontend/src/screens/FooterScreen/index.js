import React from 'react'
import classes from './FooterScreen.module.css'
const FooterScreen = () => {
  const year = new Date().getFullYear()
  return (
    <div className={classes.footerScreenContainer}>
      <p>&copy; LemaTech LLC {year}</p>
    </div>
  )
}

export default FooterScreen
