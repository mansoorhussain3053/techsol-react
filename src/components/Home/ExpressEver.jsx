import './expressever.css'
import CLIENT1 from '../../assets/clientlogos/client1.webp'
import CLIENT2 from '../../assets/clientlogos/client2.webp'
import CLIENT3 from '../../assets/clientlogos/client3.webp'
import CLIENT4 from '../../assets/clientlogos/client4.webp'
import CLIENT5 from '../../assets/clientlogos/client5.webp'
import CLIENT6 from '../../assets/clientlogos/client6.webp'
import CLIENT7 from '../../assets/clientlogos/client7.webp'
import CLIENT8 from '../../assets/clientlogos/client8.webp'

const ExpressEver = () => {
  return (
    <div className='Clients__Parents'>


        <div className='Clients__Heading'>
          <h3>BEST EXPERIENCE</h3>
          <h2>Our Clients</h2>
          <p>Our area of practice is quite wide: design, graphics, branding, development.</p>
        </div>

        <div className='Clients__Logos'>
          <article><a href='#'><img src={CLIENT1} className='Logo_Client__1' /></a></article>
          <article><a href='#'><img src={CLIENT2} className='Logo_Client__2' /></a></article>
          <article><a href='#'><img src={CLIENT3} className='Logo_Client__3' /></a></article>
          <article><a href='#'><img src={CLIENT4} className='Logo_Client__4' /></a></article>
          <article><a href='#'><img src={CLIENT5} className='Logo_Client__5' /></a></article>
          <article><a href='#'><img src={CLIENT6} className='Logo_Client__6' /></a></article>
          <article><a href='#'><img src={CLIENT7} className='Logo_Client__7' /></a></article>
          <article><a href='#'><img src={CLIENT8} className='Logo_Client__8' /></a></article>


          


        </div>



    </div>
  )
}

export default ExpressEver
