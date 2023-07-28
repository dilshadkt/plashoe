import "../../style/homeContainer.css";
import BestSeller from "../Home/best-seller/BestSeller";
import HomeCardContainer from "../Home/home-card/HomeCardContainer";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
// import HomeCard from "../Home/home-card/homeCard";
const HomeContainer = () => {
  return (
    <>
      <div className="back-image">
        <div className="img">
          <img
            alt=""
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg"
          />
          <div className="home-Content">
            <div className="main-head first">
              <span>Love the Planet</span>
              <span> we walk on </span>
            </div>
            <div className="main-head  second">
              <span>
                Bibendum fermentum, aenean donec pretium aliquam blandit
              </span>
              <span>
                tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.
              </span>
            </div>
            <div className="home-btn">
              <button className="shop-btn">
                <a href="#home">SHOP MEN </a>
              </button>

              <button className="shop-btn">
                <a href="#home">SHOP WOMEN</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////////////// banner section ///////////// */}
      <div className="banners">
        <div className="banner-items">
          <div className="banner-item assin">
            <h3>ASS SEEN IN:</h3>
          </div>
          <div className="banner-item ">
            <img
              alt=""
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg"
            />
          </div>
          <div className="banner-item">
            <img
              alt=""
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg"
            />
          </div>
          <div className="banner-item">
            <img
              alt=""
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg"
            />
          </div>
          <div className="banner-item">
            <img
              alt=""
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg"
            />
          </div>
          <div className="banner-item">
            <img
              alt=""
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg"
            />
          </div>
        </div>
      </div>
      <hr className="banner-section-hr" />
      {/* ////////////////////// about section ////////////// */}
      <div className="about-section">
        <div className="about-container">
          <div className="about-left">
            <img
              alt=""
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg"
            />
          </div>
          <div className="about-right">
            <div className="right-content">
              <h4>ABOUT US</h4>
              <h2>
                Selected materials designed for comfort and sustainability
              </h2>
              <p>
                Nullam auctor faucibus ridiculus dignissim sed et auctor sed
                eget auctor nec sed elit nunc, magna urna amet ac neque ut quam
                enim pretium risus gravida ullamcorper adipiscing at ut magna.
              </p>
              <div className="readmore-btn">
                <div>
                  <a href="#home">READ MORE </a>
                </div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ///////////////////shoe - baaner ////////// */}
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-head">
            <span>See how your shoes are made</span>
          </div>
          <div className="banner-head-content">
            <span>
              Urna, felis enim orci accumsan urna blandit egestas mattis egestas
              feugiat viverra ornare donec
            </span>
            <span>
              adipiscing semper aliquet integer risus leo volutpat nulla enim
              ultrices
            </span>
          </div>
          <div className="banner-body">
            <div className="banner-body-container">
              <img
                alt=""
                src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-how-shoes-are-made-image.png"
              />
              <div className="banner-img-content">
                <div className="top">
                  <div className="top-content">
                    <p>01.</p>
                    <h4>Pet canvas</h4>
                    <h5>
                      Morbi eget bibendum sit adipiscing morbi ac nisl vitae
                      maecenas nulla cursus
                    </h5>
                  </div>
                  <div className="top-content left-align">
                    <p>03.</p>
                    <h4>Organic cotton</h4>
                    <h5>A vel ipsum, sed dignissim elementum ultrices amet</h5>
                  </div>
                </div>
                <div className="horizontal">
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className="bottom">
                  <div className="top-content ">
                    <p>02.</p>
                    <h4>Algae foam + vegan glue</h4>
                    <h5>
                      Enim tincidunt donec vulputate magna pharetra mattis in
                    </h5>
                  </div>
                  <div className="top-content left-align">
                    <p>04.</p>
                    <h4>Upcycled plastic bottles</h4>
                    <h5>
                      Pellentesque viverra amet netus facilisis amet felis odio
                      tortor orci cursus est
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BestSeller staus={"Our Best Seller"} />
      <HomeCardContainer />
      <BestSeller staus={"New Arrivals"} />
      <div className="vision">
        <div className="vision-container">
          <div className="vsion-body">
            <div className="vsion-body-content-left">
              <p>
                Eu eget felis erat mauris aliquam mattis lacus, arcu leo aliquam
                sapien pulvinar laoreet vulputate sem aliquet phasellus egestas
                felis, est, vulputate morbi massa mauris vestibulum dui odio.
              </p>
              <div className="vision-logos">
                <img
                  alt=""
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-3.svg"
                />
                <img
                  alt=""
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-2.svg"
                />
                <img
                  alt=""
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-1.svg"
                />
              </div>
            </div>
            <div className="vsion-body-content-right">
              <div className="vision-rounded-logo">
                <img
                  alt=""
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-recycled-circle-iamge.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ///////////////////////////custpmer feed back /////////////////// */}
      <div className="customer-feed-back">
        <div className="customer-feed-back-body">
          <div className="customer-feed-back-head">
            <span>Our Customers speak for us</span>
          </div>
          <div className="customer-feed-back-message">
            <div className="customer-feed-back-message-content feed-star">
              <ul>
                <li>
                  <StarRateRoundedIcon />
                </li>
                <li>
                  <StarRateRoundedIcon />
                </li>
                <li>
                  <StarRateRoundedIcon />
                </li>
                <li>
                  <StarRateRoundedIcon />
                </li>
              </ul>
              <p>
                “Felis semper duis massa scelerisque <br />
                ac amet porttitor ac tellus venenatis <br />
                aliquam varius mauris integer”
              </p>
              <div className="feed-back-customer">
                <div className="customer-logo">
                  <img
                    alt=""
                    src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-3.jpg"
                  />
                </div>
                <div className="customer-name">JULIA KEYS</div>
              </div>
            </div>
            <div className="customer-feed-back-message-content">
              {" "}
              <ul>
                <li>
                  <StarRateRoundedIcon />
                </li>
                <li>
                  <StarRateRoundedIcon />
                </li>
                <li>
                  <StarRateRoundedIcon />
                </li>
                <li>
                  <StarRateRoundedIcon />
                </li>
              </ul>
              <p>
                “Felis semper duis massa scelerisque <br />
                ac amet porttitor ac tellus venenatis <br />
                aliquam varius mauris integer”
              </p>
              <div className="feed-back-customer">
                <div className="customer-logo">
                  <img
                    alt=""
                    src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-3.jpg"
                  />
                </div>
                <div className="customer-name">JULIA KEYS</div>
              </div>
            </div>
            <div className="customer-feed-back-message-content">
              {" "}
              <ul>
                <li>
                  <StarRateRoundedIcon />
                </li>
                <li>
                  <StarRateRoundedIcon />
                </li>
                <li>
                  <StarRateRoundedIcon />
                </li>
                <li>
                  <StarRateRoundedIcon />
                </li>
              </ul>
              <p>
                “Non malesuada fringilla non varius odio in id pellentesque
                aliquam volutpat sapien faucibus ”
              </p>
              <div className="feed-back-customer">
                <div className="customer-logo">
                  <img
                    alt=""
                    src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-3.jpg"
                  />
                </div>
                <div className="customer-name">JULIA KEYS</div>
              </div>
            </div>
          </div>
          <div className="customer-feed-back-rating">
            <span>4.8 average rating from 1814 reviews</span>
          </div>
        </div>
      </div>

      {/* ///////////////////////////home-bottom-banner///////////////////// */}
    </>
  );
};
export default HomeContainer;
