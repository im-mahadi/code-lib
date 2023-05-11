import { posts } from "@/data/demo-cards";
import Card from "../components/Card";
import { IPost } from "@/interfaces/IPost";
import Postview from "@/components/Postview";

export default function Home() {
  const data: IPost[] = posts;

  return (
    <div className='pt-10 p-5'>
      <Postview posts={data} />
    </div>
  );
}
