import { Nav } from "@/components/nav/Nav";

export default async function Home({params}) {
 const locale=(await params).locale
  return (
    <div className="w-full">
       <Nav/>
       <p>params :{locale}</p>
    </div>
  );
}
