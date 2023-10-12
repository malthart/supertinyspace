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

                <div className="grid grid-cols-1 col-span-2 md:grid-cols-2 lg:grid-cols-2 place-items-left gap-4 transition-all">
                    <img className="rounded-xl" src="/lunar/lunar_social_investing.webp" alt=""/>
                    <img className="rounded-xl" src="/lunar/lunar_ipo_radar.webp" alt=""/>
                    <img className="rounded-xl" src="/lunar/lunar_invest_news.webp" alt=""/>
                    <img className="rounded-xl" src="/lunar/lunar_workshop.webp" alt=""/>
                    <img className="rounded-xl" src="/lunar/lunar_thematics.webp" alt=""/>
                    <img className="rounded-xl" src="/lunar/lunar_astralis.webp" alt=""/>
                    <img className="rounded-xl" src="/lunar/lunar_risk_labels.webp" alt=""/>
                    <img className="rounded-xl" src="/lunar/lunar_contextual_help.webp" alt=""/>
                    <img className="rounded-xl" src="/lunar/lunar_share_stock.webp" alt=""/>
                    <img className="rounded-xl" src="/lunar/lunar_ux.webp" alt=""/>
                </div>

            </div>
        </main >
    )
}