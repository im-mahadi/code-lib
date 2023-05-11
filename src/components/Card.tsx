import { IPost } from "@/interfaces/IPost";
import { convertTime } from "@/util/convert-time";
import Link from "next/link";

export default function Card({ data }: { data: IPost }) {
  return (
    <article className='hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25'>
      <div className='rounded-[10px] bg-white p-4 !pt-20 dark:bg-gray-900 sm:p-6'>
        <time
          dateTime={data.time.toLocaleDateString()}
          className='block text-xs text-gray-500 dark:text-gray-400'
        >
          {convertTime(data.time)}
        </time>

        <Link href={`/post/${data.id}`}>
          <h3 className='mt-0.5 text-lg font-medium text-gray-900 dark:text-white cursor-pointer'>
            {data.title}
          </h3>
        </Link>

        <div className='mt-4 flex flex-wrap gap-1'>
          {data.tags.map((tag, index) => {
            return (
              <span
                key={index}
                className='whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100'
              >
                {tag}
              </span>
            );
          })}

          <span className='whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100'>
            JavaScript
          </span>
        </div>
      </div>
    </article>
  );
}
