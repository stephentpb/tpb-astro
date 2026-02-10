import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'ots6ygg8',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // important for free tier + speed
})
