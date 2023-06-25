const express = require('express')

require('dotenv').config()

const path = require('path')

const app = express()

app.use(express.json({ extended: false }))

// Define Routes

app.use('/api/send', require('./routes/sendEmail'))

const PORT = process.env.PORT || 5005

app.listen(PORT, () => {
  console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
