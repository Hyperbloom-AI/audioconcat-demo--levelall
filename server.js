const express = require('express')
const app = express()
const port = 8080
app.get('/', (req, res) => {
  res.send('home page')
  var audioconcat = require('audioconcat')

  var songs = [
    'owlman 1.mp3',
    'owlman 2.mp3'
  ]

  audioconcat(songs)
    .concat('owlmanConcat.mp3')
    .on('start', function (command) {
      console.log('ffmpeg process started:', command)
    })
    .on('error', function (err, stdout, stderr) {
      console.error('Error:', err)
      console.error('ffmpeg stderr:', stderr)
    })
    .on('end', function (output) {
      console.error('Audio created in:', output)
    })
})
app.listen(port, () => {
  console.log('server started on port ', port)
})