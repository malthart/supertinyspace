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
      <body className="bg-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
