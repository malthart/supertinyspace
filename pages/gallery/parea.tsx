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
                            <h1 className="text-stone-800 mb-6">Parea</h1>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <p>Product</p>
                            <p className="text-stone-800 mb-6">Parea is an user-first app built with SwiftUI for iOS & WatchOS.
                                It includes a local database of hand-picked padel courts coupled with ameneties from around the world.</p>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <p>Strategy</p>
                            <p className="text-stone-800 mb-6">The first (MVP) cycle of the idea came from wanting to solve a problem
                                for friends and family. When looking for padel courts, they would go to Google and open up 6-10 tabs to
                                look through. Parea offers a much easier way with an interface with the addition of a map-view and pins.
                                While the user can see where she/he is, the person browsing can quickly identify courts in their close
                                proximity. During the cycle, a lot of feedback was provided on how to make the app even better.</p>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <p className="text-stone-800 mb-6">The second cycle was all about turning the feedback into
                                solutions and get more of the brand into the product for the next cycle. The feedback from
                                cycle no. 1 included, but was not limited to:</p>
                        </div>
                        <div className="text-stone-800 text-[18px] leading-[150%]">
                            <ul className="list-disc mb-6">
                                <li>The ability to keep track of past games and perfomance</li>
                                <li>More visible amenities at a glance</li>
                                <li>WatchOS version for conveniant points-management and game activity-tracking</li>
                                <li>Be able to create and invite people to future games</li>
                            </ul>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <p className="text-stone-800 mb-6">The design on this page reflects that of the product
                            post-feedback implementation in the second cycle. Parea is currently on standby.</p>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <p className="text-stone-800 mb-6">Brand & identity by <a href="https://www.doozy.studio/"
                            target='blank' className="hover:underline">Lorenzo Rodriguez.</a></p>
                        </div>
                    </div>
                </div >

                <div className="grid grid-cols-1 col-span-2 md:grid-cols-2 lg:grid-cols-2 place-items-left gap-4 transition-all">
                    <img className="rounded-xl" src="/parea/parea_map.webp" alt=""/>
                    <img className="rounded-xl" src="/parea/parea_create_match.webp" alt=""/>
                    <img className="rounded-xl" src="/parea/parea_drawer.webp" alt=""/>
                    <img className="rounded-xl" src="/parea/parea_watch_matches.webp" alt=""/>
                    <img className="rounded-xl" src="/parea/parea_watch_today.webp" alt=""/>
                    <img className="rounded-xl" src="/parea/parea_watch_details.webp" alt=""/>
                    <img className="rounded-xl" src="/parea/parea_icons.webp" alt=""/>
                    <img className="rounded-xl" src="/parea/parea_colours.webp" alt=""/>
                    <img className="rounded-xl" src="/parea/parea_research.webp" alt=""/>
                    <img className="rounded-xl" src="/parea/parea_docs.webp" alt=""/>
                </div>

            </div>
        </main >
    )
}