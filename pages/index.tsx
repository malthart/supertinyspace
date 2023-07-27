import Image from 'next/image'
import { Inter } from 'next/font/google'
import Draggable from 'react-draggable';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="align-middle justify-between">

      <div className="py-8 px-8 w-full">
        <Draggable>
          <div className="max-w-screen-md hover:cursor-grab active:cursor-grabbing">
            <h2 className="mb-4 text-5xl tracking-wide font-normal text-gray-900 dark:text-white">hey. im malthe—a design & research generalist interested in engineering and collaborative design. im currently <a className="italic">freelancing</a>.</h2>
          </div>
        </Draggable>
      </div>

      <div className="py-8 px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <Draggable>
            <div className="hover:cursor-grab active:cursor-grabbing">
              <img className="h-auto max-w-full rounded-lg pointer-events-none" src="/T-800.png" alt="" />
            </div>
          </Draggable>
          <Draggable>
            <div className="cursor-grab">
              <img className="h-auto max-w-full rounded-lg pointer-events-none" src="/buoyemail.png" alt="generative AI" />
            </div>
          </Draggable>
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
      </div>

      <div className="fixed bottom-0 left-6 lg:left-8 right-6 lg:right-8 py-6 lg:py-8 z-10">
        <div className="w-full p-3 lg:p-4 max-w-[1040px] border border-gray-200 bg-[#ffffffc1] backdrop-blur-lg flex justify-between items-center mx-auto rounded-md">
          <div className="flex items-center gap-x-3">
            <a href="#"><img color="dark" alt="Logo" loading="lazy" width="320" height="100" decoding="async" data-nimg="1" className="h-[40px] w-auto" src="/weeee.png"/></a>
            <span className="hidden lg:block bg-gray-100 border border-gray-200 rounded text-gray-900 text-[12px] font-medium tracking-[0.23px] px-2 py-0.5 mt-0.5">Malthe's Codespace</span>
          </div>
          <div className="hidden lg:flex gap-x-4">
            <button className="hover:">
              <p className="text-2 ">👽</p>
            </button>
            <button className="hover:">
              <p className="text-2 opacity-50">🛸</p>
            </button>
            <button className="hover:">
              <p className="text-2 opacity-50">🐄</p>
            </button>
          </div>
          <div className="flex gap-x-3 justify-end w-[186px]">
            <a className="button-base button-secondary" href="#"><p className="text-2">🌮</p></a>
            <a className="relative button-base button-primary" href="#"><p className="text-2">🍕</p>
              <span className="circle-button-decoration"></span>
            </a>
          </div>
        </div>
      </div>

    </main >
  )
}
