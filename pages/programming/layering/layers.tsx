import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Layers = () => {
    return (
        <div className="relative w-[100%]">
            <div className="relative h-[90vh] sm:h-[100vh] overflow-hidden transition-all duration-1000">
                <img src="/programming/5.0db6da.webp" alt="" className="z-0 h-full w-full absolute object-cover top-0" />
                <img src="/programming/4.1e07a4.webp" alt="" className="z-10 absolute object-contain -bottom-40 left-0 m-auto" />
                <img src="/programming/3.9f3b94.webp" alt="" className="z-20 absolute object-contain bottom-10 sm:bottom-20 transition-all duration-1000 scale-110 sm:scale-100 lg:scale-100" />
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3, delay: 1 }}
                    >
                        <div className="z-30 absolute m-auto left-0 right-0 items-center flex flex-col justify-start pt-[12%]">
                            <div className="h-auto w-[250px] sm:w-[471px] transition-all duration-1000">
                                <img src="/programming/big-logo.dbe85a.png" alt="" className="h-[100%] w-[100%] block" />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <img src="/programming/2.f285ca.webp" alt="" className="z-40 absolute object-contain bottom-0 sm:bottom-0 md:-bottom-5 transition-all duration-1000 scale-15 md:scale-100 lg:scale-100" />
                <img src="/programming/1.610c19.webp" alt="" className="z-50 h-auto w-[250px] sm:w-[430px] absolute m-auto -right-28 bottom-0 transition-all duration-1000 sm:-right-50 md:-right-10 lg:right-0" />
            </div>
        </div>

    )
};

export default Layers;