const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

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
      'Authorization': 'Bearer 99707c8db6a461bd24f95cd4e2caf77aae5a5468',
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
