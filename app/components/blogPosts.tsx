import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { client, urlFor } from "../lib/sanity";
import { simpleBlogCard } from "../lib/interface";
import { Card, CardContent } from "../../components/ui/card";

async function getData() : Promise<simpleBlogCard[]> {
  const query = `*[_type == "blog"] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
  }`;

  const data = await client.fetch(query);

  return data
}


export default async function BlogPosts({query}: {query: string}) {
  const data = await getData()

  const filteredData = Array.isArray(data) ? data.filter((post) => {
    return post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  }) : []

  return (
    <div>
      {Array.isArray(data) && data.length === 0 && (
        <p className="text-bold text-3xl">Nenhum post encontrado</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        {filteredData.map((post, idx) => (
          <Card key={idx}>
            <Image 
              src={urlFor(post.titleImage).url()} 
              alt={post.title}
              width={500}
              height={500}
              className="rounded-t-tg h-[200px] object-cover"
            />
            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-400">{post.smallDescription}</p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${post.currentSlug}`}>Leia mais</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}