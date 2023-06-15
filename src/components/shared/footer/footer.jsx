import Image from 'next/image';
import fo from '../../../styles/pages/footer.module.css';
const Footer = () => {
  return (
    <div className={fo.footer}>
      <div className="container">
        <div className={fo.container}>
          <div className={fo.row}>
            <div className={fo.col}>
              <h4>Product</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Pricing plans</a></li>
                <li><a href="#">Product updates</a></li>
              </ul>
            </div>
            <div className={fo.col}>
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">User guides</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
            <div className={fo.col}>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className={fo.col}>
              <h4>Subscribe to our newsletter</h4>
              <ul>
                <li>
                  <form action='#' className='subscribeForm'>
                    <input type="text" placeholder="Enter your email" />
                    <button type="submit">Subscribe now</button>
                    <div className="gradientBorder"></div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <div className={fo.divider}></div>
          <div className={fo.social}>
            <p className={fo.terms}>©️ 2023 AnyDemo, Inc . Privacy . Terms . Sitemap</p>
            <ul className={fo.icons}>
              <li><Image src='/img/footer/facebook.png' width={32} height={32} alt='facebook' /></li>
              <li><Image src='/img/footer/youtube.png' width={32} height={32} alt='youtube' /></li>
              <li><Image src='/img/footer/instagram.png' width={32} height={32} alt='instagram' /></li>
              <li><Image src='/img/footer/twitter.png' width={32} height={32} alt='twitter' /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer