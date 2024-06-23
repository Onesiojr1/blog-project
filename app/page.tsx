import { NavBar } from "./components/navBar";
import { SearchBar } from "./components/searchBar";
import BlogPosts from "./components/blogPosts";

export const revalidate = 30

export default async function Home({searchParams} : {searchParams: {query: string}}) {
  const query = searchParams.query || ''

  return (
    <div>
      <NavBar />
      <SearchBar />
      <BlogPosts query={query}/>
    </div>
  );
}
