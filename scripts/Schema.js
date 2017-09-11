var fetch = require('node-fetch')
var fs = require('fs')

const { buildClientSchema, introspectionQuery, printSchema } = require('graphql/utilities')

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + "14680d73020e96a87b24d984b72617b838462beb"
  },
  body: JSON.stringify({ 'query': introspectionQuery }),
}).then(res => res.json()).then(res => {
  const schemaString = printSchema(buildClientSchema(res.data))
  fs.writeFileSync('schema.graphql', schemaString)
})
