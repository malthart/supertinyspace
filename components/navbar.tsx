import React from 'react';

const Navbar = () => {
    return (
        <div className="fixed bottom-0 left-6 lg:left-8 right-6 lg:right-8 py-6 lg:py-8 z-10">
            <div className="w-full p-3 lg:p-4 max-w-[1040px] border border-gray-200 bg-[#ffffffc1] backdrop-blur-lg flex justify-between items-center mx-auto rounded-md">

                <div className="flex items-center gap-x-3">
                    <a href="#" className="hover:scale-150 transition-all"><img color="dark" alt="Logo" loading="lazy" width="320" height="100" decoding="async" data-nimg="1" className="h-[40px] w-auto" src="/favicon.ico" /></a>
                    {/* <span className="hidden lg:block bg-gray-100 border border-gray-200 rounded text-gray-900 text-[12px] font-medium tracking-[0.23px] px-2 py-0.5 mt-0.5">{`Malthe's Codespace`}</span> */}
                </div>

                {/* <div className="hidden lg:flex gap-x-4 justify-center">
                    <button className="hover:scale-110 transition-all">
                        <a href="https://www.supertiny.space"><p className="text-2 text-bold">Gallery</p></a>
                    </button>
                    <button className="hover:scale-110 transition-all">
                        <a target="_blank" href="https://read.cv/malthart" rel="noopener noreferrer"><p className="text-2 opacity-50">CV</p></a>
                    </button>
                    <button className="hover:scale-110 transition-all">
                        <a target="_blank" href="https://www.producthead.xyz" rel="noopener noreferrer"><p className="text-2 opacity-50">Writing </p></a>
                    </button>
                </div> */}

                <div className="flex gap-x-3 justify-end">
                    <a className="button-base button-secondary hover:scale-105 transition-all flex" href="https://twitter.com/malthart"><p className="text-2">Twitter</p><img src="/arrow.svg" alt="window icon" className="w-3 mx-2" /></a>
                    <a className="button-base button-secondary hover:scale-105 transition-all flex" href="mailto:malthart@icloud.com"><p className="text-2">Email</p><img src="/arrow.svg" alt="window icon" className="w-3 mx-2" /></a>
                </div>
            </div>
        </div>
    )
};

export default Navbar;