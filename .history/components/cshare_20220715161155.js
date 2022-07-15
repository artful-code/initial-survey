import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import consumerStyles from "../styles/consumer.module.css";
import { Col, Row, Form, Button, Accordion } from 'react-bootstrap';
import gt from "../pic/greentick.svg"
import tc from "../pic/whitetick.svg"
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    } from 'next-share';
    
const cshare = ({cnam}) => {
  

  return (
       <div className={consumerStyles.tnk}>
           <div style={{textAlign:"center"}}>
           <Image src={tc}  width={40} height={40}></Image>
           </div>
           <div className={consumerStyles.ms}>
           Your legal notice has been sent successfully! A copy of the same has been sent you via email.
           You will get notified when the company replies.
           </div>
           <div className={consumerStyles.msr}>Share the below message on your favourite social media by tagging the alleged company to create better impact.</div>
           <div className={consumerStyles.nt}>
           I have sent a legal notice to {cnam} for the inconvenience caused to me in the insurance claim process. Thanks to <a href="https://getyourrefunds.com/" className={consumerStyles.web}>getyourrefunds.com</a>-GetYourRefunds for helping me take legal action for no extra cost.
           <div className={consumerStyles.cpt}>copy message</div>
           </div>
           <div>
	
	<FacebookShareButton
        url={'https://insidr.vercel.app/'}
        quote={'next-share is a social share qwertyhgdssxcvgtredsx buttons for your next React apps.'}
        hashtag={'#nextshare'}
        >
        <FacebookIcon size={32} round />
    </FacebookShareButton>
	<PinterestShareButton
		// {/* Url you want to share */}
		url={'https://insidr.vercel.app/'} >
		<PinterestIcon size={32} round />
	</PinterestShareButton>
	<RedditShareButton
		// {/* Url you want to share */}
		url={'https://insidr.vercel.app/'} >
		<RedditIcon size={32} round />
	</RedditShareButton>
	<WhatsappShareButton
		// {/* Url you want to share */}
        title={"next-share is a social share buttons for your next React apps."}
		url={'https://insidr.vercel.app/'} >
		<WhatsappIcon size={32} round />
	</WhatsappShareButton>
	<LinkedinShareButton
		// {/* Url you want to share */}
        summary='ewsrtyuikjhgfdsdfxghj'
        title='dtyuikjl,mnbvct'
		url={'https://insidr.vercel.app/'} >
		<LinkedinIcon size={32} round />
	</LinkedinShareButton>
	</div>
        </div>  
    
  );
};

export default cshare;
{/* <div className={consumerStyles.thank}>Thank you for
signing up with us.
We will soon
reach out to you.</div> */}