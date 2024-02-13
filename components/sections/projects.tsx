"use client";

import { LunarDrawer } from "@/components/drawers/lunardrawer";
import { PareaDrawer } from "@/components/drawers/pareadrawer";
import { RiseDrawer } from "@/components/drawers/risedrawer";

export function ProjectsSection() {
    return (
        <div className="flex flex-col py-6">
            <span className="block font-medium">Projects</span>
            <div className="grid grid-cols-2 py-6 gap-2">
                <span className="block text-gray-1100">
                    <PareaDrawer />
                </span>
                <span className="block text-gray-1100">
                    <LunarDrawer />
                </span>
                <span className="block text-gray-1100">
                    <RiseDrawer />
                </span>
            </div>
        </div>
    )
}
