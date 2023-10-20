import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (

        <main className="bg-stone-200 overflow-hidden w-full min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-left gap-6 transition-all ">

                <div className="items-top justify-left grid grid-cols-1">
                    <div className="pt-8 pl-8">
                        <div className="mb-4">
                            <h1 className="text-stone-500 text-[18px] leading-[150%]">supertiny.space</h1>
                        </div>
                        <div className="mb-4 animate-fade-in-down">
                            <p className="text-stone-800 text-[18px] leading-[150%]">Malthe Alexius Hartmann
                                is a strategic Product Designer from Denmark with a focus on user research.
                                He designs joyful experiences with heart. His latest obsession is improving
                                foundations and streamlining work between designer and developer.</p>
                        </div>
                        <Link href="/gallery/experiments">
                            <div className="flex flex-col bg-[#EAE7E1] p-4 border border-[#D2CFCA] rounded-2xl gap-3">
                                <img src="/imagery/supertiny_potion.png" className="w-[28px]"></img>
                                <div>
                                    <p className="text-stone-800 text-[16px] font-semibold leading-[150%]">Experiments</p>
                                    <p className="text-stone-800 text-[14px] leading-[150%]">I test out hypothesis, UI & graphics in here</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div >

                <div className="grid grid-cols-1 col-span-2 lg:grid-cols-2 place-items-left gap-4 transition-all p-8">
                    <Link href="/gallery/parea"><img className="rounded-xl" src="/parea/parea_map.webp" alt="" /></Link>
                    <Link href="/gallery/rise"><img className="rounded-xl" src="/rise/rise_spending.webp" alt="" /></Link>
                    <Link href="/gallery/lunar"><img className="rounded-xl" src="/lunar/lunar_social_investing.webp" alt="" /></Link>
                </div >
            </div>
        </main >
    )
}
