import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import Layering from '@/components/layering'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (

        <main className="min-h-screen scroll-smooth">
            <Layering />
        </main >
    )
}
