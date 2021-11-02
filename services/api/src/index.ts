const path = require('path')
const express = require('express')

const app = express(), DIST_DIR = __dirname;

app.use(express.static(DIST_DIR))
app.get('/health', (req, res) => {
  res.status(200).json({healthy: true});
})

const PORT: number | string = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
