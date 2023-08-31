import { Inter } from 'next/font/google'
import { Drawer } from 'vaul';
import { useState } from "react";
import Navbar from '@/components/navbar';
import Tilt from 'react-parallax-tilt';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="align-middle justify-between bg-gray-50">

      <Navbar />

      <div className="py-8 px-8 w-full">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-base sm-text-base tracking-wide font-normal text-gray-900 dark:text-white">Malthe Alexius Hartmann<br /> Built

            <a>{" "}
              <Drawer.Root shouldScaleBackground>
                <Drawer.Trigger asChild>
                  <button>a crypto trading platform,</button>
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                  <Drawer.Content className="bg-white flex flex-col fixed bottom-0 left-0 right-0 h-[96%] rounded-t-[10px]">
                    <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
                      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                      <Drawer.Title className="font-medium mb-4">
                        Lunar Block
                      </Drawer.Title>
                      <p className="text-zinc-600 mb-2">
                        I conducted foundational qualitative exploratory research and spearheaded the conception
                        of the initial prototypes, culminating in the successful launch of Lunar Block — an
                        integral component of the Lunar ecosystem that interfaces with personal bank accounts
                        for cryptocurrency trading.
                      </p>
                      <p className="text-zinc-600 mb-2">
                        My initial research uncovered a few areas of interest for the product launch, such as:
                      </p>
                      <p className="text-zinc-600 mb-6">
                        1. The annoyance of moving money from a bank account to a wallet/exchange, to then
                        start trading. Users wanted to trade directly from their bank account.
                      </p>
                      <img className="mb-2 rounded-[10px]" src="/sketch_crypto.png" alt="" />
                      <p className="text-zinc-600 mb-6 text-xs">
                        A basic rough sketch was utilized to illustrate a simple idea: skipping the usual
                        money-moving step and making a way to buy straight from the bank account.
                      </p>
                      <p className="text-zinc-600 mb-2">
                        2. Denmark is a tax-nation. Which means we put tax on everything and crypto is no exception.
                        Some users knew from past experiences, that taxes on crypto is top of the line complexity due to the lacking
                        adoption of crypto as an investment tool from government-pov.
                      </p>
                      <p className="text-zinc-600 mb-6">
                        3. Trading price and its transparency is important. I asked user what they would thought about a concept where
                        Lunar works with three of the biggest crypto exhanges: Coinbase, Kraken & Bitstamp, so to be able to get the
                        lowest possible trade price everytime. <a className="bg-blue-800 text-white">All users I interviewed using Coinbase, and other platforms told me
                          that they would immediately switch to Lunar if this was the case.</a> It was. Depending on the customer relationsship,
                        they only needed to pay between 1 and 2.5% in trading fees. All other fees such as transfer fees, exchanges fees,
                        etc. We completely removed.
                      </p>
                      <img className="mb-2 rounded-[10px]" src="/research_crypto.png" alt="" />
                      <p className="text-zinc-600 mb-6 text-xs">
                        To ensure the successful development of Lunar Block, a comprehensive grasp of its prerequisites,
                        feasibility, and limitations is essential. I supported senior leadership by conducting research
                        into conceptual viability, thereby contributing substantively to project delineation. This
                        preparatory phase serves as the bedrock for subsequent exploratory efforts.
                      </p>
                      <p className="text-zinc-600 mb-2">
                        <a className="bg-blue-800 text-white">I feel like we really created something important.</a>{" "}
                        We made direct crypto trading available to everyone via a new Danish platform
                        connected to your bank account. It was clear to see that buying and selling cryptocurrency was
                        becoming mor eimportant to especially the next generation of consumers. We believed
                        it was necessary to make cryptocurrency available in a way that was more beneficial to
                        users — which ment that we were the natural leaders to do so.
                      </p>
                      <p className="text-zinc-600 mb-2">
                        We uncovered data that made it undeniable to initiate the project:
                        More common in the younger generation, we found a 872% increase in crypto trading
                        transactions among users when comparing 2020 to 2021. We had logs available to
                        create analysis of purchasing patterns.
                      </p>
                      <p className="text-zinc-600 mb-6">
                        We used YouGov to assist us in a nationalwide survey which lead us to the conclusion
                        that close to one in five - 17% - of the 18-30 year-olds have bought cryptocurrency.
                      </p>
                      <img className="mb-2 rounded-[10px]" src="/lunarblock.png" alt="" />
                      <p className="text-zinc-600 mb-6 text-xs">
                        The explore page & coin-page. Ready for production.
                      </p>
                      <p className="text-zinc-600 mb-8">
                        Check out Lunar Block{" "}
                        <a
                          href="https://www.lunar.app/en/personal/crypto"
                          className="underline"
                          target="_blank"
                        >
                          here
                        </a>.{" "}
                      </p>
                    </div>
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.Root>
            </a>

            <a>{" "}
              <Drawer.Root shouldScaleBackground>
                <Drawer.Trigger asChild>
                  <button className="">an investment platform,</button>
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                  <Drawer.Content className="bg-white flex flex-col fixed bottom-0 left-0 right-0 h-[96%] rounded-t-[10px]">
                    <div className="p-4 bg-white rounded-t-[10px] flex-1">
                      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                      <div className="max-w-md mx-auto">
                        <Drawer.Title className="font-medium mb-4">
                          Lunar Invest
                        </Drawer.Title>
                        <p className="text-zinc-600 mb-2">
                          Worked as the Product Designer in Squad Apollo. Overseing everything design, UX
                          & market- & user research in collaboration with engineers and product.
                        </p>
                        <p className="text-zinc-600 mb-6">
                          I pushed for raising awareness & recognition of the female user group of Lunar Invest.
                          Leading to substantial research findings that changed the over-all marketing approach
                          for the product.
                        </p>
                        <img className="mb-2 rounded-[10px]" src="/lunar_invest.png" alt="" />
                        <p className="text-zinc-600 mb-8">
                          Check out Lunar Invest{" "}
                          <a
                            href="https://www.lunar.app/en/personal/invest"
                            className="underline"
                            target="_blank"
                          >
                            here
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
                  <button className="">a service marketplace,</button>
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
                          At Shouter I was given the responsbility to completely take ownership and run the entire product line.
                          Running product included user- and market research, product strategy, establishing a structured
                          way to run conversations with eachother (SCRUM was very helpful),
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
                        <p className="text-zinc-600 mb-2">
                          Miss you, Dan.
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
                  <button className="">a padel app</button>
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
                          Being around some of the nation&apos;s best developers makes you wonder
                          if software development is something to pursue when they speak so highly
                          about the trade. I pursued it and built Parea; a small iOS Native app
                          built almost completely by using Apple&apos;s SwiftUI Framework. Parea initially helped
                          travelling quality-focused Padel athletes find the top Padel courts around the world.
                        </p>
                        <p className="text-zinc-600 mb-2">
                          Parea is still a work in progress, and opportunities such as point handling,
                          deeper integration into the Apple eco-system and a Watch-companion has been
                          discovered through my own user- and market research in the field.
                        </p>
                        <p className="text-zinc-600 mb-8">
                          Check out Parea{" "}
                          <a
                            href="https://getparea.com"
                            className="underline"
                            target="_blank"
                          >
                            here
                          </a>.
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
                          </a>.
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

        <Drawer.Root shouldScaleBackground>
          <Drawer.Trigger asChild>
            <button>How I work</button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-white flex flex-col fixed bottom-0 left-0 right-0 h-[96%] rounded-t-[10px]">
              <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                <Drawer.Title className="font-medium mb-4">
                  How I work
                </Drawer.Title>
                <p className="text-zinc-600 mb-2">
                  In other words, this would be the answer to the question
                  &quot;What is your design process like?&quot;.
                </p>
                <p className="text-zinc-600 mb-2">
                  Most people have a fluid process. And Im no exception.
                  But, as an experienced designer, any time someone has
                  asked about my process, I simply tell them I don&apos;t have
                  a strict one: I instead have foundational design
                  techniques and principles I adhere to and check my work
                  against.
                </p>
                <p className="text-zinc-600 mb-2">
                  &quot;You must be shapeless, formless, like water&quot;. Being a
                  Product Designer in todays
                  world is no different. Each scenario is a different cup,
                  and the designer must adhere to the circumstances of the
                  cup — the cup is ever changing, like a company.
                </p>
                <p className="text-zinc-600 mb-6">
                  I enjoy collaboration. I haven&apos;t always liked it: But now
                  it&apos;s the first thing I cling too. It&apos;s a cheatcode into
                  getting early-early buy-in and I mentor every designer
                  to do the same. What stands in the way of collaboration
                  and involvement? Ego. Fear of rejection and critism.
                  Something that I have long left behind me.
                </p>
                <img className="mb-2 rounded-[10px]" src="/IMG_3744 2.png" alt="" />
                <p className="text-zinc-600 mb-6 text-xs">
                  Rasmus, Lead of Growth, Thomas V, Lead of Consumer,
                  Thomas, Lead of Squad Apollo, and me, jamming out in a
                  live session in Copenhagen.
                </p>
                <p className="text-zinc-600 mb-2 font-medium">
                  The Formalized Process
                </p>
                <p className="text-zinc-600 font-medium">
                  1. Discovery/Research/Play
                </p>
                <p className="text-zinc-600 mb-6">
                  I&apos;ll be spending time trying to uncover new problems,
                  opportunities, or helping someone defining a problem.
                  In this step its crucial for me to do loads of interviews
                  (both generic and contextual), while looking at NPS,
                  survey-data and competitor/ market analysis. All of this
                  material can be bundled and packed in decks to use on a
                  higher-level. Think: Director level. For me the more I
                  can send &quot;upstream&quot; the better. You might have noticed
                  the word &apos;Play&apos; in the header. What do you make of that?
                  For me, a workshop is the equivilent of Play: A place
                  where everyone can participate and the same level.
                </p>
                <img className="mb-2 rounded-[10px]" src="/me.png" alt="" />
                <p className="text-zinc-600 mb-6 text-xs">
                  Me staring at the results of a &apos;Play&apos; session.
                </p>
                <p className="text-zinc-600 font-medium">
                  2. Prototype/Wireframe/Vizualize/Blueprint
                </p>
                <p className="text-zinc-600 mb-2">
                  What is our solution to the problem? We uncovered
                  in phase one? This is what we&apos;ll be debating here.
                  The best way to go about this step is to know what
                  is technically feasible. I use everything from
                  sketches, to animations, to documentation links,
                  to posts of Twitter shwoing something — everything
                  I can use to make my point as clear as day. That,
                  and then create something that I can test with a
                  user.
                </p>
                <p className="text-zinc-600 font-medium">
                  3. Test/Review
                </p>
                <p className="text-zinc-600 mb-6">
                  You could see this as a peer-review. But with
                  users. The solution we made in phase two? Time
                  to look the devil in the eye and find out if
                  its attractive, usable, lacking friendlyness or
                  juice. Maze, a usability tool, is amazing at this,
                  but sometimes, just sitting down next to someone
                  and handing them a phone with a prototype on it
                  can take you a long way.
                </p>
                <img className="mb-2 rounded-[10px]" src="/lunar_ux.png" alt="" />
                <p className="text-zinc-600 mb-6 text-xs">
                  Participating in my research is as much an opportunity
                  for me to give back to the community. I will, on regular
                  basis, send out goodies to usrs who have helped me a lot.
                </p>
                <p className="text-zinc-600 font-medium">
                  4. Report/Reflect/Plan/Ideate
                </p>
                <p className="text-zinc-600 mb-2">
                  Coming soon
                </p>
                <p className="text-zinc-600 mb-2">
                  Coming soon
                </p>
                <p className="text-zinc-600 mb-2">
                  Coming soon
                </p>
                <p className="text-zinc-600 mb-2">
                  Coming soon
                </p>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>

        <div className="mx-auto w-52 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8">
          <Tilt gyroscope={true} tiltMaxAngleX={45} tiltMaxAngleY={45}>
            <img className="mb-2" src="/buoydeck.gif" alt="" />
          </Tilt>
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
