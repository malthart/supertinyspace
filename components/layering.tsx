import React from 'react';
import Image from 'next/image';

const Layering = () => {
    return (
        <div className="relative w-[100%]">
            <div className="relative h-[100vh] overflow-hidden">
                <img src="/programming/5.0db6da.webp" alt="" className="z-0 h-full w-full absolute object-cover top-0" />
                <img src="/programming/4.1e07a4.webp" alt="" className="z-10 absolute object-contain -bottom-40 left-0 m-auto" />
                <img src="/programming/3.9f3b94.webp" alt="" className="z-20 absolute object-contain bottom-5 sm:md-bottom-10 md:bottom-20 transition-all duration-700" />
                <div className="z-30 absolute m-auto left-0 right-0 items-center flex flex-col justify-start pt-[12%]">
                    <div className="h-auto w-[250px] sm:w-[471px] transition-all duration-700">
                        <img src="/programming/big-logo.dbe85a.png" alt="" className="h-[100%] w-[100%] block" />
                    </div>
                </div>
                <img src="/programming/2.f285ca.webp" alt="" className="z-40 absolute object-contain -bottom-10 sm:md-bottom-0 md:-bottom-0 transition-all duration-700" />
                <img src="/programming/1.610c19.webp" alt="" className="z-50 h-auto w-[250px] sm:w-[430px] absolute m-auto right-0 bottom-0 transition-all duration-700 sm:-right-20 md:-right-10 lg:right-0" />
            </div>
        </div>
    )
};

export default Layering;