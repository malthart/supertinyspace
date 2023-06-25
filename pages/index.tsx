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
    </main >
  )
}
