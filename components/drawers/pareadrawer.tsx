"use client";

import Parea from "@/public/projects/parea";
import { Drawer } from "vaul";

export function PareaDrawer() {
    return (
        <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>
                <div className="bg-black text-white flex flex-col rounded-md px-3 py-3 cursor-pointer h-[183px] justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <Parea />
                        <span>Parea</span>
                    </div>
                    <span className="text-gray-1100 text-sm">Padel tennis app built with SwiftUI</span>
                </div>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="bg-stone-200 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
                    <div className="max-w-md w-full mx-auto overflow-auto p-4 rounded-t-[10px]">
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                        <div className="max-w-md mx-auto">
                            <Drawer.Title className="font-medium mb-4">
                                Parea is a locally-stored database of hand-picked padel courts coupled with ameneties from around the world.
                            </Drawer.Title>
                            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                            <div className="text-stone-800 font-medium mb-6">
                                <p className="font-semibold">Problem</p>
                                <p className="text-stone-800 mb-6">When looking for padel courts, you need to go to Google, open up
                                    6-10 tabs and look through each page, scanning for sufficient information to make a deicison.
                                    It&apos;s time consuming, and tabs does not provide a sufficient level of depth + overview to for
                                    speedy decision making. The baseline UX for finding the right padel court is bad.
                                </p>
                                <img className="rounded" src="/projects/parea_tabs.webp" />
                            </div>
                            <div className="text-stone-800 font-medium mb-6">
                                <p className="font-semibold">Goal</p>
                                <p className="text-stone-800 mb-6">Reduce time used looking for the right padel court & increase
                                    time playing padel.
                                </p>
                            </div>
                            <div className="text-stone-800 font-medium mb-6">
                                <p className="font-semibold">Solution</p>
                                <p className="text-stone-800 mb-6">Parea offers an easy and fast way to browser for padel courts.
                                    Via a mobile map interface with pins. Upon opening up Parea the user is immediately granted access
                                    to a radar-like view of their periphereal, providing she/he the ability to quickly browse and
                                    identify courts in their close proximity.
                                </p>
                                <img className="rounded" src="/projects/parea_map.webp" />
                            </div>
                            <div className="text-stone-800 font-medium mb-6">
                                <p className="text-stone-800 mb-6">Amenities assist the user in making quick decisions and filtering
                                    courts with relevance from those without.
                                </p>
                                <img className="rounded" src="/projects/parea_amenities.webp" />
                                <small className="text-stone-500">Ameneties include, but not limited to: WiFi, Showers, Lockers</small>
                            </div>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}
