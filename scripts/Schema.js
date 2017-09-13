var fetch = require('node-fetch')
var fs = require('fs')

const { buildClientSchema, introspectionQuery, printSchema } = require('graphql/utilities')

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + "ff934ed2e7628008b03140a0acbd74c12ac8808a"
  },
  body: JSON.stringify({ 'query': introspectionQuery }),
}).then(res => res.json()).then(res => {
  const schemaString = printSchema(buildClientSchema(res.data))
  fs.writeFileSync('schema.graphql', schemaString)
})
