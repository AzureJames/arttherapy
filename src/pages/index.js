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
import HeroBanner from '../components/HeroBanner';
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
//STYLING
import '../scss/pages/_home.scss';

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
					<img src={hvac} alt="abstract art" style={{width: '100%', maxWidth: '400px', height: 'auto'}}></img>
					{/* 
					
					<div>
						<h1 className='rate-title'>rate title</h1>
						<HeroBanner />
					</div> */}
				{/* </div> */}
				<div className='inner-container' style={{marginInline: '1rem', marginBottom: '3rem', padding: "1.5rem"}}>
					<h1 className='off-white'   style={{ marginBlock: '0rem'}}>I'm Lynette Lex</h1>
					<p className='off-white'  style={{ marginBottom: '2rem'}}>PhD, ATR-BC, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LCAT, CASAC</p>
					<p className='off-white m-w65' style={{ marginBottom: '2rem'}}>
					Lynette Lex has a unique Art Therapy Studio, Life is Art, where Art Therapy, EMDR and a holistic wellness approach to therapy are combined. Meditation, Mindfulness, Reiki and Aromatherapy are often included in sessions. Art Therapy gives a non-verbal means for expression when words are not enough. 
					</p>
					<p className='off-white m-w65'  style={{ marginBottom: '2rem'}}>
					The Art Therapy Studio has a large space where both individuals and groups are able to create. This is a safe and inviting atmosphere where trauma can be addressed and healing is possible. Tela Health appointments are also available. Private pay and Cigna, Empire BCBC, Excellus BCBS, and Highmark BCBS, BCBS accepted. 
					</p> 
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
				title='Upcoming Event: example'
				tagline='Upcoming Event' //The trees are as precious to us as diamonds, pearls, and the petals of a white rose. Quickbooks Online provides the way to paperless bookkeeping and we will donate $25 to Re-Tree NY for each new client.
				tagline2='Upcoming Event'
			></DevBanner>
			
			<div className='flex1200'>
				<CardList
					index='text'
					title='About Us'
					body="We "
					body2=''
					ull=''
					ull2=''
					ull3=''
					ull4=''
					ull5=''
					ull6=''
					oll=''
					oll2=''
				></CardList>
				
				<Card
					index='text'
					title='Events & Groups'
					body='Events '
					body2=''
				></Card>
					<Card
						index='text'
						title='Services'
						body='EMDR info'
						body2='Couples and Group Therapy info'
					></Card>








<div style={{ margin: "0 auto", paddingTop: "60px", paddingBottom: "40px"}} className='flex-768'> 
	<div class="testimonial-quote group right">
        <div class="quote-container">
            <div>
                <blockquote>
                    <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
                </blockquote>  
                <cite><span>Kristi Bruno</span><br/>
                    Social Media Specialist<br/>
                    American College of Chest Physicians
                </cite>
            </div>
        </div>
    </div>     
	<div class="testimonial-quote group right" >
        <div class="quote-container">
            <div>
                <blockquote>
                    <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
                </blockquote>  
                <cite><span>Kristi Bruno</span><br/>
                    Social Media Specialist<br/>
                    American College of Chest Physicians
                </cite>
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
				summary='Hours: Mon-Fri'
				summary2='Email: Phone:'
				src={hvac}
				alt=''
			/>
			<div className='inner-container'>
			    



			<div style={{ margin: "0 auto", paddingTop: "10px", paddingBottom: "40px"}} className='flex-768'> 
	<div class="testimonial-quote group right">
        <div class="quote-container">
            <div>
                <blockquote>
                    <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
                </blockquote>  
                <cite><span>Kristi Bruno</span><br/>
                    Social Media Specialist<br/>
                    American College of Chest Physicians
                </cite>
            </div>
        </div>
    </div>     
	<div class="testimonial-quote group right" >
        <div class="quote-container">
            <div>
                <blockquote>
                    <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
                </blockquote>  
                <cite><span>Kristi Bruno</span><br/>
                    Social Media Specialist<br/>
                    American College of Chest Physicians
                </cite>
            </div>
        </div>
    </div>   


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
				<img src={hvac} alt="" style={{width: '100%', maxWidth: '400px', height: 'auto'}}></img>
				<img src={hvac} alt="" style={{width: '100%', maxWidth: '400px', height: 'auto'}}></img>
			</div>
			<div className='flex1200'>
			</div>
			<Footer />
		</div>

	);
}

export default Home;
