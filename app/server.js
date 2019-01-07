const express = require('express')
const openwhisk = require('openwhisk')

const app = express()

app.get('/', (req, res) => {
  const options = {
    api: 'https://10.0.0.243/api/v1/',
    api_key: '23bc46b1-71f6-4ed5-8c54-816aa4f8c502:123zO3xZCLrMN6v2BKK1dXYFpXlPkccOFqm12CdAsMgRU4VrNZ9lyGVCGuMDGIwP',
    namespace: 'guest',
    ignore_certs: true
  }

  const wsk = openwhisk(options)

  wsk.namespaces.list()
    .then((packages) => {
      console.log('PACKAGES')
      console.log(packages)
      return { packages }
    })
    .catch((err) => {
      console.log(err)
      return err
    })
})

app.listen(3001)
