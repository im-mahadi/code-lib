import { cards } from "@/data/demo-cards";
import Card from "../components/Card";
import { ICard } from "@/interfaces/ICard";

export default function Home() {
  const data: ICard[] = cards;

  return (
    <div className='pt-10 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
      {data.map((data, index) => (
        <Card data={data} key={index} />
      ))}
    </div>
  );
}
