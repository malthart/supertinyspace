import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="align-middle justify-between">

      <div className="py-8 px-8 w-full">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-wide font-normal text-gray-900 dark:text-white">hey. im malthe—a design & research generalist interested in engineering and collaborative design. im currently <a className="italic">freelancing</a>.</h2>
          <p className="mb-4 text-2xl tracking-wide font-normal text-gray-900 dark:text-white">i will occasionally do small animations for free. text me if you need anything +45 52225854.</p>
        </div>
      </div>

      <div className="py-8 px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/T-800.png" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/buoyemail.png" alt="generative AI" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/custimy.png" alt="" />
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
        </div>
      </div>
    </main>
  )
}
