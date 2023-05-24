import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {

  return (

    <>
      {/* <Banner /> */}


      <Header />

      <main className="container mx-auto pt-4">

        {/* <MiDiPunkz/> */}

        <h1 style={{color:'white', fontSize: '40px'}}>Community Calendar</h1>

        <br/>

        <div className='flex justify-center'>
        
        <iframe src="https://calendar.google.com/calendar/embed?src=c_hem8j0ndmbbnbeosp0783mmlpc%40group.calendar.google.com&ctz=America%2FLos_Angeles" style={{border: 0}} width="800" height="600" scrolling="no"></iframe>

        </div>

        <br/>    <br/>

        

        {/* See you soon! */}
        {/* Hello World. <Link href="/about">About</Link> */}

      </main>


      <Footer />
    </>

  )
}
