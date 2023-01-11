import React from 'react'
import { HeaderBanner, FooterBanner } from '../components'
import { client } from '../client'

const Home = ({products, headerbBannerData, footerbBannerData}) => {
  return (
    <div>
      {console.log("---------------------")}
      {console.log(footerbBannerData)}
      <HeaderBanner banner={headerbBannerData.length && headerbBannerData[0]}/>
      
      <div className="text-center mx-40 my-0 text-blue-600">
        <h2 className="text-5xl font-extrabold">畅销产品</h2>
        <p className="text-base font-extralight">家用运动装备</p>
      </div>

      {/* need to add gap between elements */}
      <div className="flex flex-row space-x-8 space-y-4 flex-wrap basis-1/2 justify-center mt-5 w-full">
        {products?.map((product) => product.name)}
        {/* {bannerData.map((banner) => banner.product)} */}

      </div>
      {/* Footer */}
      <div>
        <FooterBanner banner={footerbBannerData.length && footerbBannerData[0]}/>
      </div>
      
    </div>
  )
}

export const getServerSideProps = async () => {
   console.log(" ------ function starting ------")
  const productQuery = '*[_type == "product"]'
  const products = await client.fetch(productQuery)

  const headerBannerQuery = '*[_type == "banner" && bannerName == "headerBanner"]'
  const headerbBannerData = await client.fetch(headerBannerQuery)


  const footerBannerQuery = '*[_type == "banner" && bannerName == "footerBanner"]'
  const footerbBannerData = await client.fetch(footerBannerQuery)

return {
  props: {products, headerbBannerData, footerbBannerData},
  }
}

export default Home