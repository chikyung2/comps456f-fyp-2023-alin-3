import {Loader} from 'lucide-react';

export default function Loading() {
    return (
      <main className="text-center">
        <h2 className="text-black">Loading...</h2>
        <Loader size={100} color='rgba(0,255,0,0)' />
        <p>We're preparing the page for you. Please wait.</p>
      </main>
    )
  }