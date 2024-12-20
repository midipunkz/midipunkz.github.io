import Header from '../components/Header'
import Footer from '../components/Footer'
import Family from '../components/Family'
import Carousel from '../components/Carousel'
import Metaverses from '../components/Metaverses'
import FAQ from '../components/FAQ'
import Story from '../components/Story'
import PlayMidiVaderzButton from '@/components/PlayMidiVaderzButton'
export default function Home() {

  return (

    <>
      {/* <Banner /> */}


      <Header />

      <main className="container mx-auto pt-4">

        {/* <MiDiPunkz/> */}
        <div className='flex flex-row container mx-auto justify-center'>
        <PlayMidiVaderzButton/>
        </div>
      

        <a id="nfts" />
      
        <Carousel />

        <a id="story"/>
        <Story/>

        <a id="family" />
        <Family />

        <a id="metaverse"/>
        <Metaverses/>

        <a id="faq"/>
        <FAQ/>

        {/* See you soon! */}
        {/* Hello World. <Link href="/about">About</Link> */}

      </main>


      <Footer />
    </>

  )
}
