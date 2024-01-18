import './ourstaff.css'
import OurStaff1 from '../../assets/OurStaff/OurStaff1.jpg'
import OurStaff2 from '../../assets/OurStaff/OurStaff2.jpg'
import OurStaff3 from '../../assets/OurStaff/OurStaff3.jpg'
import OurStaff4 from '../../assets/OurStaff/OurStaff4.jpg'

const OurStaff = () => {
  return (
    <div className='OurStaff__Parent'>
    
        <div className='OurStaff__Headings'>
            <div className='MainStaff'>
            <h3>OUR STAFF</h3>
            <h2>We Strive For Your Digital Success!</h2>
            <p>Our staff is committed to honest collaboration; we prioritize mutual growth and provide innovative digital solutions for efficient performance and impactful results.</p>
            </div>

            <article>
                <p>UI / UX Design</p>
                <div> <span>88%</span></div>
            </article>

            <article>
                <p>Apps Development</p>
                <div> <span>90%</span></div>
            </article>

            <article>
                <p>Web Design % Development</p>
                <div> <span>88%</span></div>
            </article>

            <article>
                <p>Social Media Management</p>
                <div> <span>88%</span></div>
            </article>


        </div>
 
                <div className='OurStaff__Team'>
                    <article>
                        <img src={OurStaff1} alt="" />
                    </article>

                    <article>
                        <img src={OurStaff2} alt="" />
                    </article>


                    <article>
                        <img src={OurStaff3} alt="" />
                    </article>



                    <article>
                        <img src={OurStaff4} alt="" />
                    </article>

                </div>


    </div>
  )
}

export default OurStaff
