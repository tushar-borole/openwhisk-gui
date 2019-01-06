const express = require('express')

const app = express()

app.get('/', (req, res) => {
  const openwhisk = require('openwhisk')
  const options = {
    apihost: 'openwhisk.ng.bluemix.net',
    api_key: '...'
  }
  const ow = openwhisk(options)
  ow.actions.invoke('sample')
    .then(result => console.log(result))
})

app.listen(3001)
