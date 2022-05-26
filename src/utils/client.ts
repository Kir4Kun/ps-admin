import { authExchange } from '@urql/exchange-auth'
import { Auth } from 'aws-amplify'
import { cacheExchange, createClient, dedupExchange, fetchExchange, makeOperation } from '@urql/vue'

async function getToken() {
  try {
    const session = await Auth.currentSession()
    return session.getIdToken().getJwtToken()
  }
  catch (error) {
    return ''
  }
}

const getAuth = async ({ authState }: any) => {
  if (!authState) {
    const token = await getToken()
    if (token)
      return { token }

    return null
  }

  return null
}

const addAuthToOperation = ({ authState, operation }: any) => {
  if (!authState || !authState.token)
    return operation

  const fetchOptions
    = typeof operation.context.fetchOptions === 'function'
      ? operation.context.fetchOptions()
      : operation.context.fetchOptions || {}

  return makeOperation(operation.kind, operation, {
    ...operation.context,
    fetchOptions: {
      ...fetchOptions,
      headers: {
        ...fetchOptions.headers,
        Authorization: `Bearer ${authState.token}`,
      },
    },
  })
}

export const client = () => createClient({
  url: 'https://api.pokersocial.net/graphql',
  exchanges: [
    dedupExchange,
    cacheExchange,
    authExchange({
      getAuth,
      addAuthToOperation,
    }),
    fetchExchange,
  ],
})

