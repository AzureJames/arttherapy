import '../scss/components/_banner.scss';
// import img from '../img/whiterose.jpg';
// import img from '../img/contact-bg-sm.jpg';
import hvac from "../img/diving.png"
import lynette from "../img/lynette.png"
import danielle from "../img/danielle.jpg"

export default function DevBanner({title, tagline, tagline2, image, svgColor}) {
  return (
    <>
        <div class="flex-800">
            <div  className='devbanner' style={{display:"flex", justifyContent: "center", flexWrap: "wrap", alignItems: "end", margin: "1rem"}}>
              <img src={hvac} width={575} height={600} style={{height:'fit-content', flex: "1 1 700px"}} alt="diving painting"/>
              <caption style={{flex: "0 1 525px", marginBottom:'4rem'}}><p>“Swimming in the ocean is not just spending time in the water; it's a therapeutic dance with the waves that rejuvenates both body and soul.” (Digital water color painting)</p></caption>
            </div>
            <div  className='devbanner' style={{ margin: "1rem", alignSelf: "center" }}>
              <h1 className='title'>{title}</h1>
              <div className='bio-flex' style={{marginBottom:'1rem'}}>
                <img src={lynette} alt={"Lynette Portrait"} style={{maxWidth: "300px"}}></img>
                <p className='description' style={{fontSize: '19px', fontWeight: 'bold'}}>{tagline}</p>
              </div>
              // <div className='bio-flex'>
              //   <img src={danielle} alt={"Danielle Portrait"} style={{maxWidth: "300px"}}></img>
              //   <p className='description' style={{fontSize: '19px', fontWeight: 'bold'}}>{tagline2}</p>
              // </div>
            </div>
        </div>
    </>
  )
}
