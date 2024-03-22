import Link from "next/link";
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function Page() {
    return (
        <div className="flex flex-col">
      <header className="flex h-14 lg:h-[60px] items-center justify-between gap-4 border-b bg-black px-6 dark:bg-black">
        <Link className="flex items-center gap-2 font-semibold text-white" href="/">
          <img alt="App Logo" className="h-10 w-10" src="/img/ECOchampC.png" />
          <span className="text-lg lg:text-xl">ECOchamp</span>
        </Link>
        <nav className="flex justify-center">
          <Link
            className="rounded-lg px-3 py-2 text-white text-sm transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/image-recognition"
          >
            Image Recognition
          </Link>
          <Link
            className="rounded-lg px-3 py-2 text-white text-sm transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/upload"
          >
            Image Upload
          </Link>
          <Link className="rounded-lg px-3 py-2 text-white text-sm dark:text-gray-50" href="/model-status">
            Model Status
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg shadow-sm p-4">
            <h1 className="font-semibold text-2xl text-black">Image Recognition</h1>
            <div className="flex flex-col gap-4">
              <input type="file" accept="image/x-png,image/jpeg,image/gif"/>

              <Button className="w-full">Select Image</Button>
              <div className="flex gap-2">
                <Button className="flex-1">Recognize</Button>
                <Button className="flex-1">Reset Image</Button>
              </div>
            </div>
          </div>
          <div className="border rounded-lg shadow-sm p-4">
            <h1 className="font-semibold text-2xl text-black">Classified Waste Info</h1>
            <div className="flex flex-col gap-4">
              <textarea className="p-2 border rounded-lg h-80" placeholder="Classified Waste Info and Details" />
            </div>
          </div>
        </div>
      </main>
    </div>
    );
  }
  