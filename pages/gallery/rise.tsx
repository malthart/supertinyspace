import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (

        <main className="bg-stone-200 overflow-hidden w-full min-h-screen">
            <div className="py-8 px-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-left transition-all gap-6 sm:gap-20">

                <div className="items-top justify-left grid grid-cols-1">
                    <div>
                        <div className="mb-24">
                            <a className=" text-stone-800 text-[18px] leading-[150%] flex items-center gap-0.25" href="https://github.com/malthart" target="_blank">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" className="mr-2 rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path>
                                </svg>
                                <p>Back</p>
                            </a>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <h1 className="text-stone-800 mb-6">RISE</h1>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <p>Product</p>
                            <p className="text-stone-800 mb-6">RISE is the money app & debit card specifically designed for teenagers,
                            allowing them to practice spending, saving and even investing in their future. RISE seeks out to inspire a
                            financially savvy generation to confidently flex when it comes to handling their money.</p>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <p className="text-stone-800 mb-6">Malthe spent a lot of time speaking to kids and their parents, collecting
                            insights about how money manifested itself as behaviours between the kids spending habits and the parents way
                            of educating and assisting their kids in handling their money. He also faciliated numorous workshops to engage
                            cross functional stakeholders and push collaboration.</p>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <p className="text-stone-800 mb-6">UI & animation made by Malthe Alexius Hartmann.</p>
                        </div>
                    </div>
                </div >

                <div className="grid grid-cols-1 col-span-2 md:grid-cols-2 lg:grid-cols-2 place-items-left gap-4 transition-all">
                    <img className="rounded-xl" src="/rise/rise-spending.png" />
                    <img className="rounded-xl" src="/rise/rise-savings.png" />
                    <img className="rounded-xl" src="/rise/rise-goals.png" />
                    <img className="rounded-xl" src="/rise/rise-parent-drawer.png" />
                    <img className="rounded-xl" src="/rise/rise-icons.png" />
                    <img className="rounded-xl" src="/goal-animation.gif" />
                    <img className="rounded-xl" src="/rise/rise-research.png" />
                    <img className="rounded-xl" src="/rise/rise-workshop.png" />
                    <img className="rounded-xl" src="/rise/rise-social.png" />
                </div>

            </div>
        </main >
    )
}
