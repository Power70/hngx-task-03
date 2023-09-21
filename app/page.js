import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Skeleton from "./components/Skeleton";

function Home() {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-center m-5 text-blue-600 text-xl">Click the skeleton loader to explore the gallery</p>
      <Link href="/gallery">
        <Skeleton />
      </Link>
      <p className="text-center m-5 text-blue-600 text-xl">Click the skeleton loader to explore the galler</p>
    </div>
  );
}
export default Home;
