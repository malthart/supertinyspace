import { Inter } from 'next/font/google'
import { Drawer } from 'vaul';
import { useState } from "react";
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="align-middle justify-between">

      <Navbar />

      <div className="py-8 px-8 w-full">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-base sm-text-base tracking-wide font-normal text-gray-900 dark:text-white">Malthe Alexius Hartmann <br /> Built

            <a>{" "}
              <Drawer.Root shouldScaleBackground>
                <Drawer.Trigger asChild>
                  <button>two banking experiences,</button>
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                  <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
                    <div className="p-4 bg-white rounded-t-[10px] flex-1">
                      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                      <div className="max-w-md mx-auto">
                        <Drawer.Title className="font-medium mb-4">
                          Lunar & RISE
                        </Drawer.Title>
                        <p className="text-zinc-600 mb-2">
                          More information of how I worked and what I learned in this period coming soon.
                        </p>
                        <p className="text-zinc-600 mb-8">
                          Check out Lunar{" "}
                          <a
                            href="https://www.lunar.app/"
                            className="underline"
                            target="_blank"
                          >
                            here
                          </a>{" "}
                          & the funky branding of RISE{" "}
                          <a
                            href="https://www.risecard.eu"
                            className="underline"
                            target="_blank"
                          >
                            here.
                          </a>
                        </p>
                      </div>
                    </div>
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.Root>
            </a>

            <a>{" "}
              <Drawer.Root shouldScaleBackground>
                <Drawer.Trigger asChild>
                  <button>a service marketplace,</button>
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                  <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
                    <div className="p-4 bg-white rounded-t-[10px] flex-1">
                      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                      <div className="max-w-md mx-auto">
                        <Drawer.Title className="font-medium mb-4">
                          Shouter
                        </Drawer.Title>
                        <p className="text-zinc-600 mb-2">
                          I first met Simon & Adam in Århus while studying my masters degree.
                          At first, we were just vibing out in their
                          office in the Marina of Århus, talking about what Shouter was,
                          what Adam & Simon wanted it to become, and how I could
                          help them achieve what they wanted. Ultimately, they offered me to join their
                          company as their Head of Product Design & even CPO, which
                          I declined. Settling for a Product Design role.
                        </p>
                        <p className="text-zinc-600 mb-2">
                          With that position the responsbility of completely taking
                          ownership and running the entire product line was given to me.
                        </p>
                        <p className="text-zinc-600 mb-2">
                          Running product included product strategy, establishing a structured
                          way to run conversations with eachother (SCRUM was very helpful with this),
                          product analytics, while also designing full time and mentoring
                          {" "}
                          <a
                            href="https://www.linkedin.com/in/lorenzorx/"
                            className="underline"
                            target="_blank"
                          >
                            Lorenzo, the Jr. Product Designer
                          </a>.{" "}
                        </p>
                      </div>
                    </div>
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.Root>
            </a>

            <a>{" "}
              <Drawer.Root shouldScaleBackground>
                <Drawer.Trigger asChild>
                  <button>a padel app</button>
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                  <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
                    <div className="p-4 bg-white rounded-t-[10px] flex-1">
                      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                      <div className="max-w-md mx-auto">
                        <Drawer.Title className="font-medium mb-4">
                          Parea
                        </Drawer.Title>
                        <p className="text-zinc-600 mb-2">
                          More information of how I worked and what I learned in this period coming soon.
                        </p>
                        <p className="text-zinc-600 mb-8">
                          Check out Parea{" "}
                          <a
                            href="https://getparea.com"
                            className="underline"
                            target="_blank"
                          >
                            here
                          </a>
                        </p>
                      </div>
                    </div>
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.Root>
            </a>

            <a>{" "}
              <Drawer.Root shouldScaleBackground>
                <Drawer.Trigger asChild>
                  <button>& a boat insurance platform.</button>
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                  <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
                    <div className="p-4 bg-white rounded-t-[10px] flex-1">
                      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                      <div className="max-w-md mx-auto">
                        <Drawer.Title className="font-medium mb-4">
                          Buoy
                        </Drawer.Title>
                        <p className="text-zinc-600 mb-2">
                          More information of how I worked and what I learned in this period coming soon.
                        </p>
                        <p className="text-zinc-600 mb-8">
                          Check out Buoy{" "}
                          <a
                            href="https://buoy.rent"
                            className="underline"
                            target="_blank"
                          >
                            here
                          </a>
                        </p>
                      </div>
                    </div>
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.Root>
            </a>

            <br />
            <a className="text-gray-500">Based in</a> Copenhagen, Denmark
          </h2>
        </div>
      </div>


      {/* <div className="py-8 px-8 grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="grid gap-4">
          <div className="">
            <img className="h-auto max-w-full rounded-lg pointer-events-none" src="/T-800.png" alt="" />
          </div>
          <div className="">
            <img className="h-auto max-w-full rounded-lg pointer-events-none" src="/buoyemail.png" alt="generative AI" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/custimy.png" alt="" />
          </div>
          <div>
            <video autoPlay muted loop className="h-auto max-w-full rounded-lg" src="/zoomies.mp4" />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/lunarkrypto.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/menubars.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/goal-animation.gif" alt="" />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/risegoals.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/lunarinvest.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/postevand.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/buoy-boatgps.png" alt="" />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/buoydeck.gif" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/art.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/parealogo.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/lunar_ux.png" alt="" />
          </div>
        </div>
      </div> */}

    </main >
  )
}
