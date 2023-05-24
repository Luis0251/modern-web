import {google,
  dropbox,
  shopify,
  slack,
  atlassian} from './imports'
import './brand.css'
export const Brand = () => {
  const images = [
    { src: google, alt: 'google' },
    { src: dropbox, alt: 'dropbox' },
    { src: shopify, alt: 'shopify' },
    { src: slack, alt: 'slack' },
    { src: atlassian, alt: 'atlassian' }
  ];
  return (
    <div className='gpt3__brand section__padding'>
       {
        images.map((image,i)=>(
          <div key={i}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))
       }
    </div>
  )
}
