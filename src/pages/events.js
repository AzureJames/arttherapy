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

function Events() {
	return (
		<div className='home'>
								<Navbar />
			
				{/* <div className='inner-container' style={{marginInline: '1rem', marginBottom: '3rem', padding: "1.5rem"}}> */}
                <FullPost
                        url='URL for the post'
                        type=''
                        title='Events'
                        summary='Hours: Mon-Fri'
                        summary2='Email: Phone:'
                        src={hvac}
                        alt=''
                    />
				{/* </div> */}
			{/* HERO BANNER FROM BLC??
			CURVY BANNER */}
			<DevBanner
				title='Upcoming Event: example'
				tagline='Upcoming Event' 
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
				
				<img src={hvac} alt=""></img>
				<img src={hvac} alt=""></img>
			</div>
			<div className='flex1200'>
			</div>
			<Footer />
		</div>
	);
}

export default Events;
