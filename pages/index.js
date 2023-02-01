import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import { client } from '../client'
import { createClient } from "next-sanity";

// import dynamic from "next/dynamic";


// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home({heroImageData}) {
 
  return (
    

    <div className="bg-white dark:bg-balck">
      
{/* <Navbar /> */}
   
      <Head>
        <title>Personal Trainer Xin</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div
        class="w-full h-screen bg-[url('../public/img/herobg.jpg')] bg-cover bg-center bg-fixed"> */}
      <Navbar class="sticky top-0"/>
      
      <Hero heroImage={heroImageData.length && heroImageData[0]}/>

      {/* </div> */}
      
      <SectionTitle
        // pretitle="Nextly Benefits"
        title=" Why you start to work-out?">
        Improve your strength? Manage your weight? Reduce the risk of disease? Wanna get your body in a good shape? All of these goals Xin can help you achieve.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </div>
  );
}

 export const getServerSideProps = async () => {
  // 
  const heroImageQuery = '*[_type == "webImage" && imageName == "gymImage"]'
  const heroImageData = await client.fetch(heroImageQuery)
  return {
       props: {heroImageData},
       }
       
  
 }
 

//   const footerBannerQuery = '*[_type == "banner" && bannerName == "footerBanner"]'
//   const footerbBannerData = await client.fetch(footerBannerQuery)

// return {
//   props: {products, headerbBannerData, footerbBannerData},
//   }
// }

// import React from 'react'
// import { HeaderBanner, FooterBanner } from '../components'
// import { client } from '../client'

// const Home = ({products, headerbBannerData, footerbBannerData}) => {
//   return (
//     <div>
//       {console.log("---------------------")}
//       {console.log(footerbBannerData)}
//       <HeaderBanner banner={headerbBannerData.length && headerbBannerData[0]}/>
      
//       <div className="text-center mx-40 my-0 text-blue-600">
//         <h2 className="text-5xl font-extrabold">畅销产品</h2>
//         <p className="text-base font-extralight">家用运动装备</p>
//       </div>

//       {/* need to add gap between elements */}
//       <div className="flex flex-row space-x-8 space-y-4 flex-wrap basis-1/2 justify-center mt-5 w-full">
//         {products?.map((product) => product.name)}
//         {/* {bannerData.map((banner) => banner.product)} */}

//       </div>
//       <div>
//         <FooterBanner banner={footerbBannerData.length && footerbBannerData[0]}/>
//       </div>
      
//     </div>
//   )
// }

// export const getServerSideProps = async () => {
//    console.log(" ------ function starting ------")
//   const productQuery = '*[_type == "product"]'
//   const products = await client.fetch(productQuery)

//   const headerBannerQuery = '*[_type == "banner" && bannerName == "headerBanner"]'
//   const headerbBannerData = await client.fetch(headerBannerQuery)


//   const footerBannerQuery = '*[_type == "banner" && bannerName == "footerBanner"]'
//   const footerbBannerData = await client.fetch(footerBannerQuery)

// return {
//   props: {products, headerbBannerData, footerbBannerData},
//   }
// }

// export default Home