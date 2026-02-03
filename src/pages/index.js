import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CardList from '../components/CardList';
import DevBanner from '../components/DevBanner';
import FullPost from '../components/FullPost';
import mask from "../img/mask.jpg";
import mask2 from "../img/mask2.jpg";
import skele from "../img/skele.jpg";
import collage from "../img/collage.jpg";
import whitePainting from "../img/whitePainting.jpg";
//STYLING
import '../scss/pages/_home.scss';

//MUST USE A FAVICON.ICO AT THE ROOT OF THE APP DIRECTORY...
//update metadata in public index html 

function Home() {
	return (
		<div className='home'>
								<Navbar />
			<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginBlock: '1rem'}}>
				<h1 className='off-white'   style={{ marginBlock: '0rem', visibility:'hidden',width:'0px', height:'0px'}}>Life is Art Creative Arts Therapy, PLLC</h1>
				<p className='off-white'  style={{ marginBottom: '2rem', marginTop:"1rem"}}>Lynette Lex, PhD, ATR-BC, LCAT, CASAC</p>
			</div>
			<div className='flex-md' style={{maxWidth:"1200px"	, marginInline:"auto", marginTop: "1.6rem"}}>
					<img src={whitePainting} alt="abstract art" style={{width: 'auto', maxWidth: '420px', height: 'auto', maxHeight:'580px'}}></img>
				<div className='inner-container' style={{marginInline: '1rem', marginBottom: '3rem', paddingInline: "1.5rem"}}>
					<div style={{ marginBottom: '2rem', backgroundColor:'rgb(10,30,53',borderRadius:'4px',padding:'1rem'}}>
					<h2 style={{ fontSize: '29px'}}>What You Can Expect</h2>
					<p className='off-white m-w65' style={{ marginBottom: '2rem'}}>
					At Life is Art, we strive to create a space for you to feel seen and heard, no
matter the challenges you are currently facing. Within the first few
sessions our hope is that you will begin to experience a sense of relief or
the ability to breathe a little easier, knowing you have someone on your
side to partner with and ready to travel with you through all you are working on or dealing
with.
					</p>
					<h2 style={{ fontSize: '29px'}}>People Who Can Benefit</h2>
					<p className='off-white m-w65'  style={{ marginBottom: '2rem'}}>
					While your experience is unique, please allow us to share our expertise in
areas such as trauma, emotional regulation, anxiety, depression, grief and loss, life transitions,
substance use and substance use in the family. If you are someone who has been interested in
reconnecting with your body or soul this is very likely the place to
rediscover the mind body connection in your life.
					</p> 
					<h2 style={{ fontSize: '29px'}}>About Us</h2>
					<p className='off-white m-w65'  style={{ marginBottom: '2rem'}}>
					Life is Art is an unique Art Therapy Studio space, where Art Therapy, EMDR
and a holistic wellness approach to therapy are all combined. Meditation,
Mindfulness, Reiki and Aromatherapy are often included in sessions. Art
Therapy gives a non-verbal means for expression when words are not
enough. EMDR allows a process of resolving traumas both large and small. This is a safe and
inviting atmosphere where trauma can be addressed and healing is possible. In person and
telehealth appointments are available. Self-Pay fee and some insurances are accepted.
					</p>

/*CALENDAR */
					<div> <a href='https://www.zocdoc.com/practice/life-is-art-creative-arts-therapy-pllc-168511?lock=true&isNewPatient=false&referrerType=widget' 
	target='_blank' title='Life is Art Creative Arts Therapy, PLLC'>
					<img src='https://offsiteSchedule.zocdoc.com/images/remote/rb_BookOnline_White_162x71.png?type=bobhtml&monolith_provider_id=168511&practice_id=pt_uyPP_6Hodkq-S5DUdoR78Q' 
					alt='Life is Art Creative Arts Therapy, PLLC' 
						title='Life is Art Creative Arts Therapy, PLLC' 
						style='border:0' />
					</a></div>
	
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
				tagline='Lynette Lex is a Licensed Creative Art Therapist, Registered and Board
Certified Art Therapist with 27 years of experience. She is a master credentialed alcohol and
substance abuse counselor along with having a Doctorate in Holistic Health.
Lynette is also certified through EMDRIA in EMDR. She is a Reiki master, a
SoulCollage® Facilitator and a MARI facilitator/teacher. Lynette is warm and engaging, allowing
for a comfortable therapeutic relationship to explore even the most difficult topics.' //The trees are as precious to us as diamonds, pearls, and the petals of a white rose. Quickbooks Online provides the way to paperless bookkeeping and we will donate $25 to Re-Tree NY for each new client.
				tagline2='Danielle Walters is a licensed Creative Arts Therapist along with a credentialed alcohol and
substance use counselor. She has 10 years in the field and a passion for helping people
navigate life&#39;s twists and turns. In her sessions, you will explore the depths of your emotions,
thoughts and experiences using a variety of therapeutic approaches tailored to your unique
needs. Danielle believes in the power of expressive arts to heal and transform. Whether you
prefer to express yourself through words or creative outlets such as drawing, painting or writing
she is here to support you every step of the way.'
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
		
</div>
<h2 style={{display:'block', textAlign:'center',paddingTop: "40px"}}>Testimonials</h2>
<div style={{ margin: "0 auto", paddingTop: "20px"}} className='flex-768'> 
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
                    <p>I have tried so many other therapies, but the combination of Art Therapy and EMDR is
what helped me to be less reactive and feel more integrated.</p>
                </blockquote>  
                {/* <cite><span>Kristi Bruno</span><br/>
					Credentials<br/>
					Credentials
                </cite> */}
            </div>
        </div>
    </div>   
	<div className="testimonial-quote group right">
        <div className="quote-container">
            <div>
                <blockquote>
                    <p>Art Therapy and EMDR helped me to start the healing process, to be present and not
distract myself. I am able to think about things that I tried so hard to avoid. Through
these therapies I also reduced my alcohol use.</p>
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
				alt='Skeleton picture'
				caption="“In the process of patching myself together, I am reminded that all of my pieces are worthy of love.” (heart chakra work) "
			/>
			<div className='inner-container'>
			    



			<div style={{ margin: "0 auto", paddingTop: "10px", paddingBottom: "40px"}} className='flex-768'> 
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
			<div style={{display: "flex", alignItems: "center",flexDirection: "column"}}>

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
				<img src={collage} alt="a colorful collage" style={{display:"block", width: '100%', maxWidth: '650px', height: 'auto'}}></img>
<p style={{display:"block", fontWeight:"bold"}}>Identity</p>
	<p>Peeling back and discovering the pieces of true identity</p>
				{/* <img src={mask2} alt="" style={{width: '100%', maxWidth: '400px', height: 'auto'}}></img> */}
			</div>
			<div className='flex1200'>
			</div>
			<Footer />
		</div>

	);
}

export default Home;
