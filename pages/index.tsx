import { Inter } from 'next/font/google'
import { Drawer } from 'vaul';
import { useState } from "react";
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="align-middle justify-between">
<Navbar/>

      <div className="py-8 px-8 w-full">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-base sm-text-base tracking-wide font-normal text-gray-900 dark:text-white">Malthe Alexius Hartmann <br /> Built two banking experiences, a service marketplace & a boat insurance platform <br /><a className="text-gray-500">Based in</a> Copenhagen, Denmark</h2>
        </div>
        <Drawer.Root shouldScaleBackground>
          <Drawer.Trigger asChild>
            <button>Open Drawer</button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
              <div className="p-4 bg-white rounded-t-[10px] flex-1">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                <div className="max-w-md mx-auto">
                  <Drawer.Title className="font-medium mb-4">
                    Unstyled drawer for React.
                  </Drawer.Title>
                  <p className="text-zinc-600 mb-2">
                    This component can be used as a replacement for a Dialog on
                    mobile and tablet devices.
                  </p>
                  <p className="text-zinc-600 mb-8">
                    It uses{" "}
                    <a
                      href="https://www.radix-ui.com/docs/primitives/components/dialog"
                      className="underline"
                      target="_blank"
                    >
                      Radix&apos;s Dialog primitive
                    </a>{" "}
                    under the hood and is inspired by{" "}
                    <a
                      href="https://twitter.com/devongovett/status/1674470185783402496"
                      className="underline"
                      target="_blank"
                    >
                      this tweet.
                    </a>
                  </p>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
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
