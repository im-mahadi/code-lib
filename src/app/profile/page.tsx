import Card from "@/components/Card";
import Postview from "@/components/Postview";
import { posts } from "@/data/demo-cards";
import { user } from "@/data/demo-profile";
import Image from "next/image";

export default function Profile() {
  const profile = user;
  const data = posts;

  return (
    <div className='p-16 w-full flex flex-col items-center'>
      <span className='border-2 border-red-300 p-2 rounded-full'>
        <Image src={profile.imageUrl as string} height={200} width={200} alt='profile icon' />
      </span>
      <div className='mt-5 flex flex-col items-center'>
        <p className='text-2xl font-bold'>{profile.name}</p>
        <p>{profile.email}</p>
      </div>
      <div className='pt-10 p-5'>
        <Postview posts={data} />
      </div>
    </div>
  );
}
