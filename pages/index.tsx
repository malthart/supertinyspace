import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (

        <main className="bg-stone-200 overflow-hidden w-full min-h-screen">
            <div className="m-auto mt-12 p-6">
                <div className="m-auto max-w-2xl">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-12 mb-12">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row gap-3">
                                    <div>
                                        <Image
                                            src="/1689259335694.jpg"
                                            alt=""
                                            width={50}
                                            height={50}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-stone-500 text-[18px] leading-[150%]">Malthe Hartmann</h1>
                                        <p>Product & Research</p>
                                    </div>
                                </div>
                                <div className="my-auto flex flex-row gap-2">
                                    <Link className="active:scale-90 transition-all duration-200" href="https://twitter.com/malthart" target='_blank'>
                                        <Image src="/twitter.3.ico" alt="" width={20} height={20} className="rounded" />
                                    </Link>
                                    <Link className="active:scale-90 transition-all duration-200" href="mailto:malthart@icloud.com" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z" /></svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-stone-800 leading-[150%] text-base">Malthe Alexius Hartmann
                                    is a strategic Product Designer with a focus on user research. He has abilities
                                    in discovering problems and turning those problem into business opportunities.
                                    Avid triathlete.</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div>
                                <p className="font-medium text-sm mb-3">Work</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mb-12">
                            <div className="flex-row justify-between gap-6 grid grid-cols-2 col-span-3 sm:grid-cols-3">
                                <div className="flex flex-col">
                                    <p className="text-sm">The Next Race</p>
                                    <Link className="font-medium hover:underline transition-all duration-500" href="https://www.thenextrace.xyz/">Web app</Link>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">Buoy</p>
                                    <Link className="font-medium hover:underline transition-all duration-500" href="https://www.buoy.rent/">Website & App</Link>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">RISE</p>
                                    <Link className="font-medium hover:underline transition-all duration-500" href="https://www.linkedin.com/company/rise-card/">Website & App</Link>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">Parea</p>
                                    <Link className="font-medium hover:underline transition-all duration-500" href="https://www.linkedin.com/company/rise-card/">App</Link>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">Shouter</p>
                                    <Link className="font-medium hover:underline transition-all duration-500" href="https://shouter.app/">Web Platform</Link>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">Shouter</p>
                                    <Link className="font-medium hover:underline transition-all duration-500" href="https://apps.apple.com/dk/app/shouter/id1581976557?l=da">App</Link>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">Lunar</p>
                                    <Link className="font-medium hover:underline transition-all duration-500" href="https://www.lunar.app/en/personal/invest">Investment Platform</Link>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">Lunar</p>
                                    <Link className="font-medium hover:underline transition-all duration-500" href="https://www.lunar.app/en/personal/business">Business Platform</Link>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">Lunar</p>
                                    <Link className="font-medium hover:underline transition-all duration-500" href="https://www.lunar.app/en/personal/crypto">Crypto Platform</Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div>
                                <p className="font-medium text-sm mb-3">Visuals</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 col-span-2 sm:grid-cols-2 place-items-left gap-4 transition-all mb-12">
                            <Link className="group relative appearance-none" href="/gallery/parea">
                                <img className="rounded-xl z-10" src="/parea/parea_map.webp" alt="" />
                                <span className="bottom-2 left-2 object-center pointer-events-none absolute z-50 w-max rounded-md bg-white/50 backdrop-blur-lg px-2 py-1 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 shadow-sm"> Parea </span>
                            </Link>
                            <Link className="group relative appearance-none" href="/gallery/rise">
                                <img className="rounded-xl" src="/rise/rise_spending.webp" alt="" />
                                <span className="bottom-2 left-2 object-center pointer-events-none absolute z-50 w-max rounded-md bg-white/50 backdrop-blur-lg px-2 py-1 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 shadow-sm"> RISE </span>
                            </Link>
                            <Link className="group relative appearance-none" href="/gallery/lunar">
                                <img className="rounded-xl" src="/lunar/lunar_social_investing.webp" alt="" />
                                <span className="bottom-2 left-2 object-center pointer-events-none absolute z-50 w-max rounded-md bg-white/50 backdrop-blur-lg px-2 py-1 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 shadow-sm"> Lunar </span>
                            </Link>
                        </div >


                    </div>
                </div>
            </div>
        </main >
    )
}
