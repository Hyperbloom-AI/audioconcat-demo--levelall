const express = require('express')
const app = express()
const port = 8080
const Figma = require('figma-api')

app.get('/', async (req, res) => {
  res.send('home page')

  const api = new Figma.Api({
    personalAccessToken: 'figd_UsREOHqqkYNait67Zyol9wPqPWTjm4ROhUckj5II',
  });

  const fileKey = 'MSwrSBSUwKrYwy6obIDyXo' // id is '1:3'
  // const fileKey = 'ud4VZrnhqpFiNjqBvbSX6q' // id is '0:1'
  const file = await api.getImage(fileKey, { ids: '0:1', format: 'svg' })
  // ... access file data ...
  console.debug(file)

  console.log('done getting file')
})


app.listen(port, () => {
  console.log('server started on port ', port)
})