import Link from 'next/link'
import style from './index.module.scss'
export default function Home() {

  return (
    <div className={style.parent}>
      <div className={style.content}>
 
        <h2>DJ is spinning some tunes ...</h2>
        <img src="logo/dj.webp" alt='MidiPunkz DJ' style={{maxWidth:'60vw', minWidth: '20vw'}}/>

        {/* See you soon! */}
        {/* Hello World. <Link href="/about">About</Link> */}
      </div>
    </div>

  )
}
