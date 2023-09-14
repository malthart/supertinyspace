import { Inter } from 'next/font/google'
import { Drawer } from 'vaul';
import { useState } from "react";
import Tilt from 'react-parallax-tilt';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="align-middle justify-between bg-gray-50">

      <div className="py-8 px-8 w-full">
        <div className="max-w-[500px]">
          <h2 className="mb-4 text-base sm-text-base tracking-wide font-normal text-gray-900 dark:text-white">
            <p>Malthe Alexius Hartmann</p>
            <p className="mb-4">He designs joyful digital products with heart. Currently teaching himself front-end engineering.</p>
          </h2>
        </div>
      </div>

      <section className="py-8 px-8 pt-0 overflow-hidden w-full">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(305px,1fr))] place-items-left gap-5">

          <Drawer.Root>
            <Drawer.Trigger asChild>
              <a className="relative isolate grid h-full w-full min-w-[305px] gap-3 overflow-hidden row-span-1 grid-rows-[434px] rounded">
                <div className="pointer-events-none relative flex h-full w-full flex-col overflow-hidden transition cursor-pointer md:hover:bg-black/50">
                  <div className="pointer-events-auto flex overflow-x-auto absolute inset-0 -z-10 w-full object-cover h-full">
                    <img src="/shouter.webp" className="h-full w-full flex-none overflow-hidden object-cover" />
                  </div>
                  <div className="align-top w-full p-6 pb-6 text-white">
                    <div className="font-normal text-4xl text-white">Shouter</div>
                  </div>
                  <div className="mt-auto align-bottom w-full p-6 pb-6 text-white">
                    <div className="font-normal text-base text-white">Airbnb but for services</div>
                    <div className="font-normal text-base text-white/80">2022</div>
                  </div>
                </div>
              </a>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40" />
              <Drawer.Content className="bg-zinc-100 flex flex-col fixed rounded-t-[10px] h-[96%] bottom-0 left-0 right-0">
                <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px] no-scrollbar">
                  <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                  <div className="max-w-md mx-auto">
                    <Drawer.Title className="font-medium text-4xl mb-4">
                      Shouter
                    </Drawer.Title>
                    <p className="text-zinc-600 mb-4">
                      Shouter is a one-stop-shop for all home service needs;
                      A community marketplace where someone can list, discover,
                      and book tasks and cool projects. Involved in shaping the
                      way everyone thinks about services; I've helped Shouter
                      innovate and build upon their decentralized platform to
                      better serve the peer-to-peer service space.
                    </p>
                    <img src="/IMG_0219.jpg" className="mb-6 rounded"/>
                    <p className="text-zinc font-semibold text-xl mb-2">
                      Things I accomplished while at Shouter:
                    </p>
                    <ul className="text-zinc-600 mb-4 list-disc">
                      <li>Setting the strategy for expanding the device domain from iOS to Android & Web</li>
                      <li>Steered Design System towards a cohesive styling that would match cross-platform requirements</li>
                      <li>Launched a closed Android beta-programme with +50 users for controlled release, data- & bug collection</li>
                      <li>Implemented & faciliated SCRUM meetings to build predictability, continuously phasing in new learnings</li>
                      <li>Evangelised user research as a means to collect insights for discovery & problem solving</li>
                      <li>Facilitate cross-functional brainstorms & other workshops</li>
                      <li>Employed & mentored 1 Jr. Designer on UX & research practises</li>
                      <li>Remodelled the onboarding to priorizite a specific user-type</li>
                    </ul>
                    <p className="text-zinc font-semibold text-xl mb-2">
                      Using a webplatform as bait
                    </p>
                    <p className="text-zinc-600 mb-4">
                      My grandpa would usually take me fishing around the local
                      area of where I used to live as a kid. I used this green
                      goo as bait. It smelled weird. I didn't catch anything.
                      But my grandpa caught every fish imaginable. How?
                    </p>
                    <p className="text-zinc-600 mb-4">
                      The Shouter-app had one great flaw: Everything was tucked
                      away in an app that required you to first and foremost, discover
                      the app and the existence of Shouter. Then, download the app
                      on app-store. Thirdly, go through a semi-extensive
                      onboarding flow. That's a long user-journey. Plus, operating
                      exclusively from a device is not very SEO friendly.
                    </p>
                    <p className="text-zinc-600 mb-4">
                      Two things had to be done: 1. We had to create an easier and
                      more convenient way of discovering Shouter and then, incentivise
                      users by showing them what they could potentially earn by
                      completing a task in their geographical proximity. This ment
                      we had to rebuild the task-API in the app, and make them more
                      flexible to use on web, too. <a href="https://shouter.app/tasks"
                      className="underline"> Check the result out for yourself.</a>
                      Take notice of every piece of information is available, but
                      when you tap the "I will do it", it immediately prompts you
                      to download the app. We caught a lot of fish that way.
                    </p>
                    <p className="text-zinc-600 mb-4">
                      That's some real good bait right there. Thanks Pa.
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
                  <div className="flex gap-6 justify-end max-w-md mx-auto">
                    <a
                      className="text-xs text-zinc-600 flex items-center gap-0.25"
                      href="https://shouter.app/"
                      target="_blank"
                    >
                      Shouter
                      <svg
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="16"
                        aria-hidden="true"
                        className="w-3 h-3 ml-1"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>

          <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>
              <a className="relative isolate grid h-full w-full min-w-[305px] gap-3 overflow-hidden row-span-1 grid-rows-[434px] rounded">
                <div className="pointer-events-none relative flex h-full w-full flex-col overflow-hidden transition cursor-pointer md:hover:bg-black/50">
                  <div className="pointer-events-auto flex overflow-x-auto absolute inset-0 -z-10 w-full object-cover h-full">
                    <img src="/rise.png" className="h-full w-full flex-none overflow-hidden object-cover" />
                  </div>
                  <div className="align-top w-full rounded-lg p-6 pb-6 text-white">
                    <div className="font-normal text-4xl text-white">RISE</div>
                  </div>
                  <div className="mt-auto align-bottom w-full rounded-lg p-6 pb-6 text-white">
                    <div className="font-normal text-base text-white">Joyful money experience</div>
                    <div className="font-normal text-base text-white/80">2021</div>
                  </div>
                </div>
              </a>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40" />
              <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
                <div className="p-4 bg-white rounded-t-[10px] flex-1">
                  <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                  <div className="max-w-md mx-auto">
                    <Drawer.Title className="font-medium mb-4">
                      RISE
                    </Drawer.Title>
                    <p className="text-zinc-600 mb-2">
                      More information coming soon.
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
                  <div className="flex gap-6 justify-end max-w-md mx-auto">
                    <a
                      className="text-xs text-zinc-600 flex items-center gap-0.25"
                      href="https://www.risecard.eu/"
                      target="_blank"
                    >
                      RISE
                      <svg
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="16"
                        aria-hidden="true"
                        className="w-3 h-3 ml-1"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>

          <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>
              <a className="relative isolate grid h-full w-full min-w-[305px] gap-3 overflow-hidden row-span-1 grid-rows-[434px] rounded">
                <div className="pointer-events-none relative flex h-full w-full flex-col overflow-hidden transition cursor-pointer md:hover:bg-black/50">
                  <div className="pointer-events-auto flex overflow-x-auto absolute inset-0 -z-10 w-full object-cover h-full">
                    <video loop autoPlay muted controls={false} className="h-full w-full flex-none overflow-hidden object-cover">
                      <source src="/lunar.mp4" />
                    </video>
                  </div>
                  <div className="align-top w-full rounded-lg p-6 pb-6 text-white">
                    <div className="font-normal text-4xl text-white">Lunar</div>
                  </div>
                  <div className="mt-auto align-bottom w-full rounded-lg p-6 pb-6 text-white">
                    <div className="font-normal text-base text-white">Financial super app</div>
                    <div className="font-normal text-base text-white/80">2020</div>
                  </div>
                </div>
              </a>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40" />
              <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
                <div className="p-4 bg-white rounded-t-[10px] flex-1">
                  <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                  <div className="max-w-md mx-auto">
                    <Drawer.Title className="font-medium mb-4">
                      Lunar
                    </Drawer.Title>
                    <p className="text-zinc-600 mb-2">
                      More information coming soon.
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
                  <div className="flex gap-6 justify-end max-w-md mx-auto">
                    <a
                      className="text-xs text-zinc-600 flex items-center gap-0.25"
                      href="https://www.lunar.app/"
                      target="_blank"
                    >
                      Lunar
                      <svg
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="16"
                        aria-hidden="true"
                        className="w-3 h-3 ml-1"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>

        </div>
      </section>

      <section className="py-8 px-8 pt-0 overflow-hidden w-full">
        <div className="flex gap-x-3 justify-start">
          <a className="text-xs text-zinc-600 flex items-center gap-0.25" href="https://github.com/malthart" target="_blank"> Github
            <svg
              fill="none"
              height="16"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="16"
              aria-hidden="true"
              className="w-3 h-3 ml-1"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
            </svg>
          </a>

          <a className="text-xs text-zinc-600 flex items-center gap-0.25" href="https://x.com/malthart" target="_blank"> X
            <svg
              fill="none"
              height="16"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="16"
              aria-hidden="true"
              className="w-3 h-3 ml-1"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
            </svg>
          </a>

          <a className="text-xs text-zinc-600 flex items-center gap-0.25" href="hmailto:malthart@icloud.com" target="_blank"> Email
            <svg
              fill="none"
              height="16"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="16"
              aria-hidden="true"
              className="w-3 h-3 ml-1"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
            </svg>
          </a>
        </div>
      </section>

    </main >
  )
}
