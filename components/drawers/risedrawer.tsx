"use client";

import { Drawer } from "vaul";

export function RiseDrawer() {
    return (
        <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>
                <div className="bg-yellow-400 text-black flex flex-col rounded-md px-3 py-3 cursor-pointer h-[183px] justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <img src="/projects/rise.webp" className="w-5 rounded" />
                        <span>Rise</span>
                    </div>
                    <span className="text-gray-1100 text-sm">Money goals for kids</span>
                </div>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="bg-stone-200 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
                    <div className="max-w-md w-full mx-auto overflow-auto p-4 rounded-t-[10px]">
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                        <div className="max-w-md mx-auto">
                            <Drawer.Title className="font-medium mb-4">
                                Creating a digitalized piggy bank to teach kids financial literacy skills.
                            </Drawer.Title>
                            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                            <div className="text-stone-800 font-medium mb-6">
                                <p className="font-semibold">More coming soon</p>
                            </div>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}
