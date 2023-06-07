import '@/styles/globals.css';
import type { AppProps, } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <Component {...pageProps} />
    </AnimatePresence>
  )
}
