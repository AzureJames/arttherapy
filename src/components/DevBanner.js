import '../scss/components/_banner.scss';
// import img from '../img/whiterose.jpg';
// import img from '../img/contact-bg-sm.jpg';
import hvac from "../img/diving.png"

export default function DevBanner({title, tagline, tagline2, image, svgColor}) {
  return (
    <>
        <div className='devbanner'>
            <img src={hvac} width={575} height={600} alt="mountain forest"/>
            <div>
            <h1 className='title'>{title}</h1>
            <p className='description'>{tagline}</p>
            <p className='description' style={{fontSize: '21px', fontWeight: 'bold'}}>{tagline2}</p>
            </div>
        </div>
    </>
  )
}