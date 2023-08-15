import { Inter } from 'next/font/google'
import { Drawer } from 'vaul';
import { useState } from "react";
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Agency() {
    const [open, setOpen] = useState(false);
    return (
        <main className="align-middle justify-between bg-gray-50">

            <Navbar />

            <div className="py-8 px-8 w-full">
                <div className="max-w-screen-md">
                    <h1 className="text-base sm-text-base tracking-wide font-normal text-gray-900 dark:text-white">Super Tiny Agency</h1>
                    <p className="text-base sm-text-base tracking-wide font-normal text-gray-900 dark:text-white">Industry standard design, research & front-end development in a bundled subscription. Made for teams that are not ready to commit to a full-time designer, but still want expertise & structure.</p>
                </div>
            </div>

            <div className="z-[-1] grid grid-cols-1 gap-4 md:grid-cols-2 px-8 w-full">

                <div className="border-border w-full rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6 relative">
                    <h3 className="mb-1 flex items-center text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>Mobile & Web Apps</h3>
                    <p className="text-muted-foreground">From the conceptual idea to the final handoff to developers. Mobile & Web Apps are limited to high fidelity design.</p>
                </div>

                <div className="border-border w-full rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6 relative">
                    <h3 className="font-cal mb-1 flex items-center text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                            <line x1="3" x2="21" y1="9" y2="9"></line></svg> Design Systems</h3>
                    <p className="text-muted-foreground">Throughout the entirety of my career I've boiled down the best process of creating an actually valuable design system.</p>
                </div>

                <div className="border-border w-full rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6 relative">
                    <h3 className="font-cal mb-1 flex items-center text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4"><path d="M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z"></path>
                        <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z"></path>
                        <path d="M21 12h1"></path>
                        <path d="M18.5 4.5 18 5"></path>
                        <path d="M2 12h1"></path>
                        <path d="M12 2v1"></path>
                        <path d="m4.929 4.929.707.707"></path>
                        <path d="M12 12v6"></path></svg>Landing Pages</h3>
                    <p className="text-muted-foreground">Enjoy design & front-end engineering. From first the first commit on Github, to running changes. E-Commerce & CRM is possible.</p>
                </div>

                <div className="border-border w-full rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6 relative">
                    <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 border-transparent bg-white text-muted-foreground absolute -top-3 right-2">Coming soon</div>
                    <h3 className="font-cal mb-1 flex items-center text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4"><rect width="18" height="12" x="3" y="8" rx="1"></rect>
                        <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"></path>
                        <path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"></path></svg>Icons, Branding & Motion</h3>
                    <p className="text-muted-foreground">There's no good design without depth. I'll consult and design icons, assist you in branding & create moving animations.</p>
                </div>

                <div className="border-border w-full rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6 relative">
                    <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 border-transparent bg-white text-muted-foreground absolute -top-3 right-2">Coming soon</div>
                    <h3 className="font-cal mb-1 flex items-center text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4"><rect width="18" height="12" x="3" y="8" rx="1"></rect>
                        <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"></path>
                        <path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"></path></svg>User Research, Product Analytics & UX</h3>
                    <p className="text-muted-foreground">Don't threat about unanswered question or data. I'll help you make sense of it from an academic approach.</p>
                </div>

            </div>

            <div className="py-8 px-8 w-full">
                <div className="max-w-screen-md">
                    <p>Previous cases included, but are not limited to, Lunar, Customy, RISE, Shouter, Buoy & Zwift.</p>
                    <a className="text-gray-500">Starting at</a> $5000/mo.
                </div>
            </div>

        </main >
    )
}
