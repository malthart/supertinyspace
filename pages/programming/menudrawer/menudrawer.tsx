"use client";

import { Drawer } from "vaul";

export default function MenuDrawer() {
    return (
        <Drawer.Root>

            <div className="fixed bottom-0 left-0 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <Drawer.Trigger asChild>
                        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </button>
                    </Drawer.Trigger>
                </div>
            </div>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
                <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed max-h-[25%] bottom-0 left-0 right-0">
                    <div className="p-4 bg-white rounded-t-[4px] flex-1">
                        <div className="max-w-md mx-auto">
                            <Drawer.Title className="font-medium">
                                What are you looking for?
                            </Drawer.Title>
                            <p className="text-zinc-600 text-sm">
                                Search for anything and everything
                            </p>
                            <textarea
                                className="border border-gray-400/25 mt-2 w-full rounded p-2 mb-1"
                                placeholder="What is 2 x 2?"
                            />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded w-full">
                                Go look
                            </button>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}