import '../scss/components/_banner.scss';
// import img from '../img/whiterose.jpg';
// import img from '../img/contact-bg-sm.jpg';
import hvac from "../img/diving.png"

export default function DevBanner({title, tagline, tagline2, image, svgColor}) {
  return (
    <>
        <div className='devbanner'>
            <div>
              <img src={hvac} width={575} height={600} alt="diving painting"/>
              <caption><p>Swimming in the ocean is not just spending time in the water; it's a therapeutic dance with the waves that rejuvenates both body and soul. (Digital water color painting)</p></caption>
            </div>
            <div>
            <h1 className='title'>{title}</h1>
            <p className='description'>{tagline}</p>
            <p className='description' style={{fontSize: '21px', fontWeight: 'bold'}}>{tagline2}</p>
            </div>
        </div>
    </>
  )
}