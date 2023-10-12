import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (

        <main className="bg-stone-200 overflow-hidden w-full min-h-screen">
            <div className="py-8 px-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-left transition-all gap-6 sm:gap-20">

                <div className="items-top justify-left grid grid-cols-1">
                    <div>
                        <div className="mb-24">
                            <Link className="text-stone-800 text-[18px] leading-[150%] flex items-center gap-0.25" href="/">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="mr-2 rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path>
                                </svg>
                                <p>Back</p>
                            </Link>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <h1 className="text-stone-800 mb-6">Experiments</h1>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <p>Product</p>
                            <p className="text-stone-800 mb-6">All UI and graphical work is original and created by Malthe Alexius Hartmann.</p>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <p>3D Models</p>
                            <a href="/experiments/birdie3d.zip" className="text-stone-800 mb-6 hover:underline">Birdie3D.zip</a>
                        </div>
                    </div>
                </div >

                <div className="grid grid-cols-1 col-span-2 md:grid-cols-2 lg:grid-cols-2 place-items-left gap-4 transition-all">
                    <img className="rounded-xl" src="/experiments/mobilepay_suggestions_home.webp" alt="" />
                    <img className="rounded-xl" src="/experiments/rise_cards.webp" alt="" />
                    <video autoPlay muted loop className="rounded-xl min-h-[600px] h-auto object-cover" src="/experiments/birdie3d.webm" />
                    <img className="rounded-xl" src="/experiments/buoydeck.gif" alt="" />
                    <img className="rounded-xl" src="/experiments/female_invest_card.webp" alt="" />
                    <img className="rounded-xl" src="/experiments/female_invest_stock.webp" alt="" />
                </div>

            </div>
        </main >
    )
}