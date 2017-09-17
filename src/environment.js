const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')
import token from './token'

const store = new Store(new RecordSource())

const network = Network.create((
  operation,
  variables,
) =>
  fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
  .then(response => response.json())
);

const environment = new Environment({
  network,
  store,
})

export default environment
