import { init } from '@jill64/sentry-sveltekit-cloudflare/client'

const onError = init(
  'https://75f9a9a33581c8ec0443d920d4e41d1f@o4505814639312896.ingest.sentry.io/4506383731195904'
)

export const handleError = onError()
