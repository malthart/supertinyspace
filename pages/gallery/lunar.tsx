import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (

        <main className="relative bg-stone-200 overflow-hidden w-full min-h-screen">
            <div className="relative py-8 px-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 transition-all gap-6 sm:gap-20">

                <div className="items-top justify-left grid grid-cols-1">
                    <div>
                        <div className="mb-24 hover:bg-white/50 rounded-xl transition-all duration-300 w-fit p-2">
                            <Link className="text-stone-800 text-[18px] leading-[150%] flex items-center gap-0.25" href="/">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="mr-2 rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path>
                                </svg>
                                <p>Back</p>
                            </Link>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <h1 className="text-stone-800 mb-6">Lunar</h1>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <p>Product</p>
                            <p className="text-stone-800 mb-6">Lunar is a fintech company offering an alternative to traditional banking.
                                It primarily targets millenials with a bank account through an app interface and an associated visa debit
                                card. Lunar does not faciliate banking branches, making it a 100% digital experience. Lunar has several product
                                lines in its belt, such as, but not limited to: Investing in stocks, ETF & crypto. Business banking. Loans.
                                Buy Now Pay Later and a tiering system.</p>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <p>Role</p>
                            <p className="text-stone-800 mb-6">Malthe was primarily tasked to lead discovery on the consumer vertical as
                                well as business vertical. This ment speaking to users on a continous weekly basis, and creating early prototypes
                                or desired products to test against users. This was helpful in reducing risk factors and negligence of new
                                features and product releases.</p>
                        </div>
                        <div className="text-stone-500 text-[18px] leading-[150%]">
                            <p className="text-stone-800 mb-6">Projects he has been a part of and led:</p>
                        </div>
                        <div className="text-stone-800 text-[18px] leading-[150%]">
                            <ul className="list-disc mb-6">
                                <li>Initial discovery research & prototypes of the Lunar crypto product</li>
                                <li>Contionous user research and development of the Lunar investment platform</li>
                                <li>The inclusion of women in research of the Lunar investment platform</li>
                                <li>Research of Business customers to address unmet needs and wants</li>
                                <li>Assistant facilitator for the Lunar x Astralis collaborative Design Sprint</li>
                                <li>Lunar x Astralis collaborative Design Sprint</li>
                                <li>Research of AML & Back Office use of internal product</li>
                                <li>Increase user engagement by using push-notifications research</li>
                                <li>Descrease tier churning project</li>
                                <li>Initial research & prototyping of the crowdlending platform</li>
                                <li>Contextual help project</li>
                            </ul>
                        </div>
                    </div>
                </div >

                <div className="grid relative grid-cols-1 col-span-2 md:grid-cols-2 lg:grid-cols-2 place-items-left gap-4 transition-all">
                    <div className="group relative appearance-none ">
                        <div className="top-2 left-2 pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-2 text-xs font-medium text-white transition-all duration-300">
                            <svg className="fill-stone-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M14 9l10 7.675-4.236.71 2.66 5.423-2.441 1.192-2.675-5.474-3.308 2.863v-12.389zm-7-7h5v-2h-5v2zm7 0h3v3h2v-5h-5v2zm-12 3v-3h3v-2h-5v5h2zm-2 7h2v-5h-2v5zm5 5h-3v-3h-2v5h5v-2zm12-10v1.781l2 1.535v-3.316h-2zm-10 12h5v-2h-5v2z" /></svg>
                        </div>
                        <img className="rounded-xl" src="/lunar/lunar_social_investing.webp" alt="" />
                        <span className="bottom-2 left-2 right-2 object-center pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-1 text-xs font-medium text-white opacity-0 group-hover:opacity-100 shadow-sm transition-all duration-300">
                            I was tasked with creating a prototype showcasing aspects of social investing and test it against users.
                        </span>
                    </div>
                    <div className="group relative appearance-none">
                        <div className="top-2 left-2 pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-2 text-xs font-medium text-white transition-all duration-300">
                            <svg className="fill-stone-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M14 9l10 7.675-4.236.71 2.66 5.423-2.441 1.192-2.675-5.474-3.308 2.863v-12.389zm-7-7h5v-2h-5v2zm7 0h3v3h2v-5h-5v2zm-12 3v-3h3v-2h-5v5h2zm-2 7h2v-5h-2v5zm5 5h-3v-3h-2v5h5v-2zm12-10v1.781l2 1.535v-3.316h-2zm-10 12h5v-2h-5v2z" /></svg>
                        </div>
                        <img className="rounded-xl" src="/lunar/lunar_ipo_radar.webp" alt="" />
                        <span className="bottom-2 left-2 right-2 object-center pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-1 text-xs font-medium text-white opacity-0 group-hover:opacity-100 shadow-sm transition-all duration-300">
                            The IPO Radar came from: how might we levarage Lunar Invest above that of just being a place to buy and sell stock?
                        </span>
                    </div>
                    <div className="group relative appearance-none">
                        <div className="top-2 left-2 pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-2 text-xs font-medium text-white transition-all duration-300">
                            <svg className="fill-stone-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M14 9l10 7.675-4.236.71 2.66 5.423-2.441 1.192-2.675-5.474-3.308 2.863v-12.389zm-7-7h5v-2h-5v2zm7 0h3v3h2v-5h-5v2zm-12 3v-3h3v-2h-5v5h2zm-2 7h2v-5h-2v5zm5 5h-3v-3h-2v5h5v-2zm12-10v1.781l2 1.535v-3.316h-2zm-10 12h5v-2h-5v2z" /></svg>
                        </div>
                        <img className="rounded-xl" src="/lunar/lunar_invest_news.webp" alt="" />
                        <span className="bottom-2 left-2 right-2 object-center pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-1 text-xs font-medium text-white opacity-0 group-hover:opacity-100 shadow-sm transition-all duration-300">
                            Through my research with users, it became clear that the majority was seeking information outside of Lunar.
                        </span>
                    </div>
                    <img className="rounded-xl" src="/lunar/lunar_workshop.webp" alt="" />
                    <div className="group relative appearance-none">
                        <div className="top-2 left-2 pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-2 text-xs font-medium text-white transition-all duration-300">
                            <svg className="fill-stone-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M14 9l10 7.675-4.236.71 2.66 5.423-2.441 1.192-2.675-5.474-3.308 2.863v-12.389zm-7-7h5v-2h-5v2zm7 0h3v3h2v-5h-5v2zm-12 3v-3h3v-2h-5v5h2zm-2 7h2v-5h-2v5zm5 5h-3v-3h-2v5h5v-2zm12-10v1.781l2 1.535v-3.316h-2zm-10 12h5v-2h-5v2z" /></svg>
                        </div>
                        <img className="rounded-xl" src="/lunar/lunar_thematics.webp" alt="" />
                        <span className="bottom-2 left-2 right-2 object-center pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-1 text-xs font-medium text-white opacity-0 group-hover:opacity-100 shadow-sm transition-all duration-300">
                            I created thematic investing based of off my research with beginner investors looking for more than numbers; they wanted purpose.
                        </span>
                    </div>
                    <div className="group relative appearance-none">
                        <div className="top-2 left-2 pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-2 text-xs font-medium text-white transition-all duration-300">
                            <svg className="fill-stone-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M14 9l10 7.675-4.236.71 2.66 5.423-2.441 1.192-2.675-5.474-3.308 2.863v-12.389zm-7-7h5v-2h-5v2zm7 0h3v3h2v-5h-5v2zm-12 3v-3h3v-2h-5v5h2zm-2 7h2v-5h-2v5zm5 5h-3v-3h-2v5h5v-2zm12-10v1.781l2 1.535v-3.316h-2zm-10 12h5v-2h-5v2z" /></svg>
                        </div>
                        <img className="rounded-xl" src="/lunar/lunar_astralis.webp" alt="" />
                        <span className="bottom-2 left-2 right-2 object-center pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-1 text-xs font-medium text-white opacity-0 group-hover:opacity-100 shadow-sm transition-all duration-300">
                            Acted as the Assitant Facilitaror (Co-Facilitator) to the Facilitator of the Design Sprint for the Astralis & Lunar product collaboration.
                        </span>
                    </div>
                    <div className="group relative appearance-none">
                        <div className="top-2 left-2 pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-2 text-xs font-medium text-white transition-all duration-300">
                            <svg className="fill-stone-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M14 9l10 7.675-4.236.71 2.66 5.423-2.441 1.192-2.675-5.474-3.308 2.863v-12.389zm-7-7h5v-2h-5v2zm7 0h3v3h2v-5h-5v2zm-12 3v-3h3v-2h-5v5h2zm-2 7h2v-5h-2v5zm5 5h-3v-3h-2v5h5v-2zm12-10v1.781l2 1.535v-3.316h-2zm-10 12h5v-2h-5v2z" /></svg>
                        </div>
                        <img className="rounded-xl" src="/lunar/lunar_risk_labels.webp" alt="" />
                        <span className="bottom-2 left-2 right-2 object-center pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-1 text-xs font-medium text-white opacity-0 group-hover:opacity-100 shadow-sm transition-all duration-300">
                            Explored risk labels and other dynamic messages to inform and educate users on investment concepts.
                        </span>
                    </div>
                    <div className="group relative appearance-none">
                        <div className="top-2 left-2 pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-2 text-xs font-medium text-white transition-all duration-300">
                            <svg className="fill-stone-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M14 9l10 7.675-4.236.71 2.66 5.423-2.441 1.192-2.675-5.474-3.308 2.863v-12.389zm-7-7h5v-2h-5v2zm7 0h3v3h2v-5h-5v2zm-12 3v-3h3v-2h-5v5h2zm-2 7h2v-5h-2v5zm5 5h-3v-3h-2v5h5v-2zm12-10v1.781l2 1.535v-3.316h-2zm-10 12h5v-2h-5v2z" /></svg>
                        </div>
                        <img className="rounded-xl" src="/lunar/lunar_contextual_help.webp" alt="" />
                        <span className="bottom-2 left-2 right-2 object-center pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-1 text-xs font-medium text-white opacity-0 group-hover:opacity-100 shadow-sm transition-all duration-300">
                            Contextual help sought out to create a layer of information and answer questions that would otherwise be directed to support.
                        </span>
                    </div>
                    <div className="group relative appearance-none">
                        <div className="top-2 left-2 pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-2 text-xs font-medium text-white transition-all duration-300">
                            <svg className="fill-stone-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M14 9l10 7.675-4.236.71 2.66 5.423-2.441 1.192-2.675-5.474-3.308 2.863v-12.389zm-7-7h5v-2h-5v2zm7 0h3v3h2v-5h-5v2zm-12 3v-3h3v-2h-5v5h2zm-2 7h2v-5h-2v5zm5 5h-3v-3h-2v5h5v-2zm12-10v1.781l2 1.535v-3.316h-2zm-10 12h5v-2h-5v2z" /></svg>
                        </div>
                        <img className="rounded-xl transition-all duration-300" src="/lunar/lunar_share_stock.webp" alt="" />
                        <span className="bottom-2 left-2 right-2 object-center pointer-events-none absolute z-50 rounded-md bg-white/50 backdrop-blur-lg px-2 py-1 text-xs font-medium text-white opacity-0 group-hover:opacity-100 shadow-sm transition-all duration-300">
                            An idea born from the social investing project. Users could share links to a stock overview from the stock page and assist Lunar in user acquisition.
                        </span>
                    </div>
                    <img className="rounded-xl" src="/lunar/lunar_ux.webp" alt="" />
                </div>

                <div className="flex flex-row left-5 bottom-5 fixed gap-2">
                    <span className="bg-black/50 pointer-events-none rounded-md backdrop-blur-lg px-2 py-2 text-xs font-medium text-white transition-all duration-300">
                        Hover/Tap images with the icon:
                    </span>
                    <div className="bg-black/50 backdrop-blur-lg  pointer-events-none z-50 rounded-md px-2 py-2 text-xs font-medium text-white transition-all duration-300">
                        <svg className="fill-stone-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M14 9l10 7.675-4.236.71 2.66 5.423-2.441 1.192-2.675-5.474-3.308 2.863v-12.389zm-7-7h5v-2h-5v2zm7 0h3v3h2v-5h-5v2zm-12 3v-3h3v-2h-5v5h2zm-2 7h2v-5h-2v5zm5 5h-3v-3h-2v5h5v-2zm12-10v1.781l2 1.535v-3.316h-2zm-10 12h5v-2h-5v2z" /></svg>
                    </div>
                </div>

            </div>
        </main >
    )
}