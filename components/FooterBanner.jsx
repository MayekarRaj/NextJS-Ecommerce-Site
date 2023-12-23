import React from 'react'
import { urlFor } from '@/lib/client';
import Link from 'next/link';

const FooterBanner = ({footerBanner: {discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image}}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <p>{largeText1}</p>
          <p>{largeText2}</p>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <p>{midText}</p>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} className='footer-banner-image'></img>
      </div>
    </div>
  )
}

export default FooterBanner