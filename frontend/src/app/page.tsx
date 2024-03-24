import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        
        <div className="border rounded-lg shadow-sm p-4">
          <h1 className="font-semibold text-2xl text-white">Main page</h1>
          <img alt="App Logo" className="h-20 w-30" src="/img/ECOchampB.png" />
          <p className="max-w-prose text-gray-500 text-sm md:text-base/relaxed dark:text-gray-400">
            ECOchamp is a free web application to.....................
          </p>
        </div>
      </main>
    </div>
  );
}
