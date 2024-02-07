"use client";

import { Drawer } from "vaul";

export function LunarDrawer() {
    return (
        <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>
                <div className="bg-gray-300 text-black flex flex-col rounded-md px-3 py-3 cursor-pointer h-[183px] justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <img src="/projects/lunar.webp" className="w-5 rounded" />
                        <span>Lunar</span>
                    </div>
                    <span className="text-gray-1100 text-sm">Thematic Investing</span>
                </div>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="bg-stone-200 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
                    <div className="max-w-md w-full mx-auto overflow-auto p-4 rounded-t-[10px]">
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                        <div className="max-w-md mx-auto">
                            <Drawer.Title className="font-medium mb-4">
                                Thematic Investing is a feature created for Lunar to enable users to explore stocks in a new way.
                            </Drawer.Title>
                            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                            <div className="text-stone-800 font-medium mb-6">
                                <p className="font-semibold">Problem(s)</p>
                                <ul className="list-inside list-decimal mb-6">
                                    <li>
                                        Lunar Invest (now: Wealth) was a previously untouched product
                                        stuck in the MVP-stage
                                    </li>
                                    <li>
                                        There were no marketing handles or competitive advantage
                                    </li>
                                    <li>
                                        No one was bothered asking the users of the product what they
                                        expected from it
                                    </li>
                                    <li>
                                        It lacked depth, as the only way to discover stocks was in one long list
                                        with little to no properties
                                    </li>
                                </ul>
                                <img className="rounded" src="/projects/lunar_problems.webp" />
                            </div>
                            <div className="text-stone-800 font-medium mb-6">
                                <p className="font-semibold">Goal</p>
                                <p className="text-stone-800 mb-6">Facilitate a full-discovery cycle for the purpose of funelling
                                    new user- & market-based information into Apollo (Squad resonsible for Lunar Invest) and contribute
                                    to their idea-backlog.
                                </p>
                            </div>
                            <div className="text-stone-800 font-medium mb-6">
                                <p className="font-semibold">Solution</p>
                                <p className="text-stone-800 mb-6">Coming soon.
                                </p>
                            </div>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}
