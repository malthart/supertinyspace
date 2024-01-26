import { Inter } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion';
import Bottomnav from '@/pages/programming/layering/bottomnav';
import Layers from '@/pages/programming/layering/layers';

const inter = Inter({ subsets: ['latin'] })

export default function Layering() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <main className="min-h-screen scroll-smooth">
                    <Bottomnav />
                    <Layers />
                </main >
            </motion.div>
        </AnimatePresence>
    )
}