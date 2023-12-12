import { hooks } from '@jill64/npm-demo-layout'
import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init(
  'https://75f9a9a33581c8ec0443d920d4e41d1f@o4505814639312896.ingest.sentry.io/4506383731195904'
)

export const handle = onHandle(hooks)
export const handleError = onError()
