import Image from "next/image";
import { NavBar } from "../../components/navBar";
import { fullBlog } from "../../lib/interface";
import { client, urlFor } from "../../lib/sanity";
import { PortableText } from "next-sanity";

export const revalidate = 30

async function getData(slug: string) : Promise<fullBlog> {
  const query = `*[_type == "blog"  && slug.current == '${slug}']{
    "currentSlug": slug.current,
    title,
    content,
    titleImage
  }[0]`

  const data = await client.fetch(query);

  return data
  
}

export default async function BlogArticle({params} : {params: {slug: string}}) {

  const data = await getData(params.slug)

  return(
    <div>
      <NavBar />
      <div className="mt-8">
        <h1>
          <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">Onesio Junior - Blog</span>
          <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm-text-4xl">{data.title}</span>
        </h1>
        <Image 
          src={urlFor(data.titleImage).url()} 
          width={800} 
          height={800} 
          alt={data.currentSlug} 
          priority
          className="rounded-lg mt-8 border"
        />
        <div className="mt-16 prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary">
          <PortableText value={data.content}/>
        </div>
      </div>
    </div>
  )
}