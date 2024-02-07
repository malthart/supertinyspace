import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          Malthe Alexius Hartmann
        </title>
        <meta
          name="description"
          content="Built two banking experiences, a service marketplace & a boat insurance platform. Based in Copenhagen, Denmark."
          key="desc"
        />
        <meta property="og:image" content="" />
      </Head>
      <body className="antialiased bg-gray-50">
        <div vaul-drawer-wrapper="" className="bg-[#FAFAFA] min-h-[100vh]">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
