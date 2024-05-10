import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import CardList from '../components/CardList';
import BannerCard from '../components/BannerCard';
import DevBanner from '../components/DevBanner';
import FullPost from '../components/FullPost';
import CurvySection from '../components/CurvySection';

import hvac from "../img/hvac.jpeg";
import diving from "../img/diving.png";
import mask from "../img/mask.jpg";
import mask2 from "../img/mask2.jpg";
import skele from "../img/skele.jpg";
import whitePainting from "../img/whitePainting.jpg";

import HeroBanner from '../components/HeroBanner';
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
//STYLING
import '../scss/pages/_home.scss';
import OurServices from '../components/OurServices';

//MUST USE A FAVICON.ICO AT THE ROOT OF THE APP DIRECTORY...
//update metadata in public index html 

function Home() {
	return (
		<div className='home'>
								<Navbar />
			<div className='flex-md' style={{maxWidth:"1200px"	, marginInline:"auto", marginTop: "1.6rem"}}>
				{/* <div className='bg'> */}
					{/* <BannerCard
						index='text'
						title='Cozy Bros'
						body='We keep you warm'
						body2='We keep you warm'
					></BannerCard> */}
					<img src={whitePainting} alt="abstract art" style={{width: '100%', maxWidth: '400px', height: 'auto'}}></img>
					{/* 
					
					<div>
						<h1 className='rate-title'>rate title</h1>
						<HeroBanner />
					</div> */}
				{/* </div> */}
				<div className='inner-container' style={{marginInline: '1rem', marginBottom: '3rem', padding: "1.5rem"}}>
					<h1 className='off-white'   style={{ marginBlock: '0rem'}}>Life is Art Creative Arts Therapy, PLLC</h1>
					<p className='off-white'  style={{ marginBottom: '2rem', marginTop:"1rem"}}>Lynette Lex, PhD, ATR-BC, LCAT, CASAC</p>
					<div style={{ marginBottom: '2rem', backgroundColor:'rgb(10,30,53',borderRadius:'4px',padding:'1rem'}}>
					<p className='off-white m-w65' style={{ marginBottom: '2rem'}}>
					Life is Art is an unique Art Therapy Studio space, where Art Therapy, EMDR and a holistic wellness approach to therapy are combined. Meditation, Mindfulness, Reiki and Aromatherapy are often included in sessions. 
					</p>
					<p className='off-white m-w65'  style={{ marginBottom: '2rem'}}>
					Art Therapy gives a nonverbal means of expression when words are not enough. This is a safe and inviting atmosphere where trauma can be addressed and healing is supported.  
					</p> 
					<p className='off-white m-w65'  style={{ marginBottom: '2rem'}}>
					In-person and telehealth appointments are available. Private pay and some insurances accepted. 
					</p>
					</div>
					{/* <div style={{display:"flex", gap:".5rem"}}>
						<a href='#'>
						<AiFillFacebook size={40} color={"fff"}/>
						</a>
						<a href='#'>
						<FaSquareInstagram  size={40} color={"fff"}/>
						</a>
					</div> */}
				</div>
			</div>
			{/* HERO BANNER FROM BLC??
			CURVY BANNER */}
			<DevBanner
				title='Bio'
				tagline='' //The trees are as precious to us as diamonds, pearls, and the petals of a white rose. Quickbooks Online provides the way to paperless bookkeeping and we will donate $25 to Re-Tree NY for each new client.
				tagline2='Lynette Lex is a Licensed Creative Art Therapist, Registered and Board
				Certified Art Therapist. She is a master credentialed alcohol and substance
				abuse counselor along with having a Doctorate in Holistic Health. Lynette is also certified through EMDRIA in EMDR. She is a Reiki master, a
				SoulCollage® Facilitator and a MARI facilitator/teacher.'
				style={{marginBottom:'0px'}}
			></DevBanner>
							{/* <OurServices /> */}
			<div className='flex1200'>
			<CardList
					index='text'
					title='Events & Groups'
					body=""
					body2=''
					ull='*MARI - Mandala Assessment Research Instrument'
					ull2='*Journaling Through the Chakras Group'
					ull3=''
					ull4='*SoulCollage® group and individual sessions'
					ull5='*Various, groups and workshops offered on Art Therapy and related topics upon request'
					ull6=''
					oll=''
					oll2=''
				></CardList>


				<div className='card' > 
						<div className='cardtop'>
							<h2 className='h2two'>Helpful Links</h2>
						</div>
						<div className='servicecard'>
							{/* <img src={pic} alt="hello" width={128} height={128}/> */}
							<ul>
								<li>
									<ul>
										<li><a href="https://arttherapy.org/">Art Therapy Association</a></li>
										<li><a href="https://www.emdria.org/">EMDRIA</a></li>
										<li><a href="https://www.maricreativeresources.com/">MARI Creative Resources</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>


				
					{/* <Card
						index='text'
						title='Services'
						body='EMDR info'
						body2='Couples and Group Therapy info'
					></Card> */}


<div style={{ margin: "0 auto", paddingTop: "60px", paddingBottom: "40px"}} className='flex-768'> 
	<div className="testimonial-quote group right">
        <div className="quote-container">
            <div>
                <blockquote>
                    <p>Art Therapy and EMDR pleasantly surprised me. The experience allowed me to
synthesize my previous work and future goals. It was productive and efficient with
healing comprehension.</p>
                </blockquote>  
                {/* <cite><span>Kristi Bruno</span><br/>
                    Credentials<br/>
                    Credentials
                </cite> */}
            </div>
        </div>
    </div>     
	<div className="testimonial-quote group right" >
        <div className="quote-container">
            <div>
                <blockquote>
                    <p>I have tried so many other therapies, but the combination of Art Therapy and EMDR his
what helped me to be less reactive and feel more integrated.</p>
                </blockquote>  
                {/* <cite><span>Kristi Bruno</span><br/>
					Credentials<br/>
					Credentials
                </cite> */}
            </div>
        </div>
    </div>   
    <hr style={{margin: "60px auto", opacity: ".5"}} />


</div>



			</div>
			<FullPost
				url='URL for the post'
				type=''
				title='Contact'
				summary='Hours: Weekdays, day and evening hours are available.
				
				'
				
				summary2='
				PO Box 160
				Lakeview, NY 14085
				Phone: 716-235-1900
				Email: lifeisarthamburg@gmail.com'
				src={skele}
				alt=''
				caption="“In the process of patching myself together, I am reminded that all of my pieces are worthy of love.” (heart chakra work) "
			/>
			<div className='inner-container'>
			    



			<div style={{ margin: "0 auto", paddingTop: "10px", paddingBottom: "40px"}} className='flex-768'> 
	<div className="testimonial-quote group right">
        <div className="quote-container">
            <div>
                <blockquote>
                    <p>Art Therapy and EMDR helped me to start the healing process, to be present and not
distract myself. I am able to think about things that I tried do hard to avoid. Through
these therapies I also reduced my alcohol use.</p>
                </blockquote>  
                {/* <cite><span>Kristi Bruno</span><br/>
                    Credentials<br/>
                    Credentials
                </cite> */}
            </div>
        </div>
    </div>     
	{/* <div className="testimonial-quote group right" >
        <div className="quote-container">
            <div>
                <blockquote>
                    <p>Overall, fantastic!</p>
                </blockquote>  
                <cite><span>Kristi Bruno</span><br/>
				Credentials<br/>
				Credentials
                </cite>
            </div>
        </div>
    </div>    */}


</div>


			</div>
			<div className='flex1200'>

		    	{/* <CardList
					index='text'
					title='Art images'
					body="Other information"
					body2='other information'
					ull=''
					ull2=''
					ull3=''
					ull4=''
					ull5=''
					ull6=''
					oll='1. '
					oll2='2. '
				></CardList> */}
				<img src={mask} alt="" style={{width: '100%', maxWidth: '400px', height: 'auto'}}></img>
				<img src={mask2} alt="" style={{width: '100%', maxWidth: '400px', height: 'auto'}}></img>
			</div>
			<div className='flex1200'>
			</div>
			<Footer />
		</div>

	);
}

export default Home;
