import Link from 'next/link'
import style from './index.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Placeholder from '../components/Placeholder'
import Banner from '../components/Banner'
import Family from '../components/Family'
import Carousel from '../components/Carousel'
import MiDiPunkz from '../components/MiDiPunkz'
import Metaverses from '../components/Metaverses'
import FAQ from '../components/FAQ'
export default function Home() {

  return (

    <>
      <Banner />


      <Header />

      <main className="container mx-auto pt-4">

        {/* <MiDiPunkz/> */}

        <a id="nfts" />
        <Carousel />

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
