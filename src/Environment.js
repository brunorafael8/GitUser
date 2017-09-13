const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + "cc32f5dae242b5baf3e1294337baff9699ef87c9"
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
      return response.json()
  })
})

const environment = new Environment({
  network,
  store,
})

export default environment
