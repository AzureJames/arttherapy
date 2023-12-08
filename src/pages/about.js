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
import sunflower from "../img/sunflower.jpg";
import HeroBanner from '../components/HeroBanner';
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
//STYLING
import '../scss/pages/_home.scss';

//MUST USE A FAVICON.ICO AT THE ROOT OF THE APP DIRECTORY...
//update metadata in public index html 

function About() {
	return (
		<div className='home'>
								<Navbar />
			<div className='flex-md' style={{maxWidth:"1200px"	, marginInline:"auto"}}>
				<div className='bg'>
					{/* <BannerCard
						index='text'
						title='Cozy Bros'
						body='We keep you warm'
						body2='We keep you warm'
					></BannerCard> */}
					<img src={sunflower} alt="abstract art" style={{maxHeight:"400px"}}></img>
					<caption><p style={{marginInline: "1rem"}}>The blue is spiritual for my brother who passed away. The roots are not the best ground to work with. The sunflower stands further away from the dark parts. It faces the sun and is more hopeful.</p></caption>
					{/* 
					
					<div>
						<h1 className='rate-title'>rate title</h1>
						<HeroBanner />
					</div> */}
				</div>
				<div className='inner-container' style={{marginInline: '1rem', marginBottom: '3rem', padding: "1.5rem"}}>
					<h1 className='off-white'>About</h1>
					<p className='off-white'>PhD, LCAT, ATR-BC, CASAC</p>
					<p className='off-white m-w65' style={{ marginBottom: '2rem'}}>
						More bio intro more bio intro more bio intro more bio intro more bio intro more bio intro
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
						title='Art/Testimonial'
						body='more info'
						body2='more info'
					></Card>
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
			<div className='flex1200'>
			</div>
			<Footer />
		</div>
	);
}

export default About;
