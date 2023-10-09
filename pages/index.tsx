import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (

        <main className="bg-stone-200 overflow-hidden w-full min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-left gap-6 transition-all">

                <div className="items-top justify-left grid grid-cols-1">
                    <div className="pt-8 pl-8">
                        <div className="mb-4">
                            <h1 className="text-stone-500 text-[18px] leading-[150%]">supertiny.space</h1>
                        </div>
                        <div>
                            <p className="text-stone-800 text-[18px] leading-[150%]">Malthe Alexius Hartmann
                            is a strategic Product Designer from Denmark with a focus on user research.
                            He designs joyful experiences with heart. His latest obsession is improving
                            foundations and streamlining work between designer and developer.</p>
                        </div>
                    </div>
                </div >

                <div className="grid grid-cols-1 col-span-2 lg:grid-cols-2 place-items-left gap-4 transition-all p-8">
                    <Link href="/gallery/parea"><img className="rounded-xl" src="/parea/parea_map.webp" alt="" /></Link>
                    <Link href="/gallery/rise"><img className="rounded-xl" src="/rise/rise-spending.png" alt="" /></Link>
                </div >
            </div>
        </main >
    )
}
