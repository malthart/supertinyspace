import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { PareaDrawer } from '@/components/drawers/pareadrawer'
import { HeroSection } from '@/components/sections/hero'
import { MailingSection } from '@/components/sections/mailinglist'
import { AboutSections } from '@/components/sections/about'
import { ProjectsSection } from '@/components/sections/projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (

        <main className="bg-stone-200 overflow-hidden w-full min-h-screen">
            <div className="max-w-md mx-auto p-6">
                <HeroSection />
                <AboutSections />
                <ProjectsSection />
                <MailingSection />
            </div>
        </main >
    )
}
