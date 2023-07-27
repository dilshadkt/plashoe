import React from "react";
import "../../../style/footer.css";
import HttpsIcon from "@mui/icons-material/Https";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
  return (
    <>
      <div className="home-bottom-banner-card">
        <div className="home-bottom-banner-card-image">
          <div className="home-bottom-banner-card-content">
            <span>Better for People & the Planet</span>
            <p>
              Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est
              dictum in vulputate
            </p>
            <div className="home-bottom-banner-card-content-btn">
              <button>SHOP MEN</button>
              <button>SHOP MEN</button>
            </div>
          </div>
          <img
            alt=""
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-cta-image-bg.jpg"
          />
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-section-head">
          <div className="footer-section-head-content">
            <div className="footer-section-head-content-items">
              <div className="footer-section-head-content-item">
                <HttpsIcon />
                <span>Secure Payment</span>
              </div>
              <hr className="footer-section-hr" />
              <div className="footer-section-head-content-item">
                <LocalShippingIcon />
                <span>Express Shipping</span>
              </div>
              <hr className="footer-section-hr" />
              <div className="footer-section-head-content-item">
                <AutorenewIcon />
                <span>Free Return</span>
              </div>
            </div>
            <hr className="footer-horizontal" />
          </div>
        </div>
        <div className="footer-section-content">
          <div className="footer-section-content-body">
            <div className="footer-section-content-body-item footer-first">
              <span>PLASHOE</span>
              <p>
                Praesent eget tortor sit risus egestas nulla pharetra ornare
                quis bibendum est bibendum sapien proin nascetur
              </p>
              <ul>
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <FacebookRoundedIcon />
                </li>
                <li>
                  <TwitterIcon />
                </li>
              </ul>
            </div>
            <div className="footer-section-content-body-item">
              <span>Shop</span>
              <div>
                <span>Shop Men</span>
                <span>Shop Women</span>
                <span>Lookbook</span>
                <span>Gift Card</span>
                <span>Sale</span>
              </div>
            </div>
            <div className="footer-section-content-body-item">
              <span>About</span>
              <div>
                <span>Our Story</span>
                <span>Our Materials</span>
                <span>Our Value</span>
                <span>Sustainability</span>
                <span>Manufacture</span>
              </div>
            </div>
            <div className="footer-section-content-body-item">
              <span>Need Help?</span>
              <div>
                <span>FAQs</span>
                <span>Shipping & Returns</span>
                <span>Shoe Care</span>
                <span>Size Chart</span>
                <span>Contact Us</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section-copyright">
          <span>
            © 2023 Recycled Shoe Store. Powered by Recycled Shoe Store.
          </span>
          <div className="payment-cards">
            <img
              alt=""
              src="https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/payment-icons.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
