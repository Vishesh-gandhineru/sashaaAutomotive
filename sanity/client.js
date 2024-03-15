import {createClient} from 'next-sanity'

export  const client = createClient({
  projectId: "zllfluo3",
  dataset: "production",
  apiVersion: "v2024-03-14",
  // unless you have caching for your front end, `useCdn` should be `true` for most production environments
  useCdn: true, 
})