import React from 'react';
import { Drawer } from 'vaul';
import { useState } from "react";

const Bottomnav = () => {
    return (

        <div className="fixed z-50 w-max h-12 px-4 -translate-x-1/2 bg-white border border-gray-300 rounded-2xl bottom-4 left-1/2">
            <div className="grid h-full max-w-s mx-auto">
                <p className="text-center m-auto">Resize the window width</p>
            </div>
        </div>

    )
};

export default Bottomnav;