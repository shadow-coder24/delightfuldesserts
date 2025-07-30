import { Advertisement } from "@/component/advertisement";
import { Cakezone } from "@/component/cakezone";
import { Categorysection } from "@/component/categorysection";
import { Productcategory } from "@/component/productcategory";

export default function Home() {
  return (
      <main className="min-h-screen bg-pinksoft">
        <Categorysection />
        <Advertisement />
        <Cakezone />
        <Productcategory />
      </main>
  );
}
