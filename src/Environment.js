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
      'Authorization': 'Bearer ' + "14680d73020e96a87b24d984b72617b838462beb"
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
