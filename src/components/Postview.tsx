import { IPost } from "@/interfaces/IPost";
import Card from "./Card";

export default function Postview({ posts }: { posts: IPost[] }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
      {posts.map((data, index) => (
        <Card data={data} key={index} />
      ))}
    </div>
  );
}
