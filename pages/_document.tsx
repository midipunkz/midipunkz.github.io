import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>MidiPunkz</title>
        <link rel="preload" href="fonts/peepo.woff2" as="font" type="font/woff2"/>

        <meta name="description" content="Wanna know what a PUNK sounds like? Punkz painted with piano as brush." />
        </Head>
     
      <body style={{padding:0, margin:0}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}