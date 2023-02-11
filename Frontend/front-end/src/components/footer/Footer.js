import React from 'react';
import style from './Footer.module.css';
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className={style.left_side}>
          <div className={style.about}>
            <h3 className={style.footer_title}>Winner's Circle Sports Apparel</h3>
            <p className={style.footer_content}>
              345 Fayetteville St., Raleigh, NC 29817
              <br />
              Call us at: 1-803-555-3120
            </p>
            <div className={style.icons}>
            <SocialIcon  network="twitter" bgColor="#fec20f" />
            <SocialIcon network="instagram" bgColor="#fec20f" />
            <SocialIcon network="facebook" bgColor="#fec20f" />
            </div>
          </div>
          <div className={style.about_us}>
            <h3 className={style.about_title}>About us</h3>
            <br />
            <ul className={style.about_para}>
              <li>
                {/* finished footer */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deleniti non?
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, velit.</li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, ratione.
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, distinctio.
              </li>
            </ul>
          </div>
          <div className={style.right_side}>
            <h3 className={style.shop}>Shop</h3>
            <ul className={style.links}>
              <li className={style.list_unstyled}>
                <a className={style.aColor} href="/#">Women</a>
              </li>
              <br />
              <li className={style.list_unstyled}>
                <a className={style.aColor} href="/#">Men</a>
              </li>
              <br />
              <li className={style.list_unstyled}>
                <a className={style.aColor} href="/#">Kids</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.footer_copyright}>
          {`Copyright © Winner's Circle Sports Apparel, Inc. ${year}`}
        </div>
      </footer>
    </>
  );
};
export default Footer;
