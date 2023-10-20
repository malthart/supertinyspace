import { Inter } from 'next/font/google'
import Layering from '@/components/layering'
import { motion, AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1  }}
                transition={{ duration: 2 }}
            >
                <main className="min-h-screen scroll-smooth">
                    <Layering />
                </main >
            </motion.div>
        </AnimatePresence>
    )
}
