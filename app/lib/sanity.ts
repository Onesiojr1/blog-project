import { createClient, SanityClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "f6ec0w0u",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
})


export function urlFor(source: any) {
  const builder = imageUrlBuilder(client);
  
  return builder.image(source)
}