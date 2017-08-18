const download = require('download')
const got = require('got')

const url = 'http://inspirobot.me/api?generate=true'

setInterval(function () {
  got(url)
    .then(res => {
      return res.body
    }).then(res => {
    console.log(res)
    download(res, './files/').then(() => {
      console.log('done!')
    })
  }).catch(err => {
    console.log(err.message)
  })
}, 1000)
