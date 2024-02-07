"use client";

import { PareaDrawer } from "@/components/drawers/pareadrawer";

export function ProjectsSection() {
    return (
        <div className="flex flex-col py-6">
            <span className="block font-medium">Projects</span>
            <span className="block text-gray-1100"><PareaDrawer /></span>
        </div>
    )
}
