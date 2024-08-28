import Image from "next/image";
import { Inter } from "next/font/google";
// import Map from "@/components/Map";
import dynamic from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });
const Map = dynamic(() => import("@/components/Map"), {
  ssr: false
});
export default function Home() {
  console.log("process", process.env.NEXT_PUBLIC_HERE_MAP_API_KEY)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Map />
    </main>
  );
}
