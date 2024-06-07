// importancion de iconos
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//imagenes

import "./App.css";

function App() {
  return (
    <>
      <div className="bannerContainer">
        <nav className="navPrincipal">
          <div className="navLeft">
            <img src={`/public/Images/logo.png`} alt="" />
          </div>

          <div className="navRight">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Computer</a>
              </li>
              <li>
                <a href="">Laptop</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="infoBanner">
          <div className="infoBannerContainer">
            <div className="infoBannerleft">
              <div className="leftText">
                <strong>Computer And Laptop</strong>
                <h1>Accessories</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or
                </p>
              </div>
              <div className="buttons">
                <button>Buy Now</button>
                <button>Contact</button>
              </div>
            </div>
            <div className="infoBannerRight">
              <img src="/Images/pct.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <section className="cardProducts">
        <div className="cardConainer">
          <div className="card">
            <div className="cardImg">
              <img src="/Images/thr.png" alt="" />
            </div>
            <div className="cardInfo">
              <strong>Computer</strong>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="cardImg">
              <img src="/Images/thr1.png" alt="" />
            </div>
            <div className="cardInfo">
              <strong>Laptop</strong>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="cardImg">
              <img src="/Images/thr2.png" alt="" />
            </div>
            <div className="cardInfo">
              <strong>Tablet</strong>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="oursProducts">
        <div className="title">
          <h3>OUR PRODUCTS</h3>
        </div>
        <div className="producstContainer">
          <div className="cardProduct">
            <img src="/Images/product1.png" alt="" />
            <button>Keyboard</button>
          </div>
          <div className="cardProduct">
            <img src="/Images/product2.png" alt="" />
            <button>Mouse</button>
          </div>
          <div className="cardProduct">
            <img src="/Images/product3.png" alt="" />
            <button>Camera</button>
          </div>
          <div className="cardProduct">
            <img src="/Images/product4.png" alt="" />
            <button>Speakers</button>
          </div>
          <div className="cardProduct">
            <img src="/Images/product5.png" alt="" />
            <button>Modem</button>
          </div>
          <div className="cardProduct">
            <img src="/Images/product6.png" alt="" />
            <button>HardDisk</button>
          </div>

          <div className="cardProduct">
            <img src="/Images/product7.png" alt="" />
            <button>Rams</button>
          </div>
          <div className="cardProduct">
            <img src="/Images/product8.png" alt="" />
            <button>Bettery</button>
          </div>
          <div className="cardProduct">
            <img src="/Images/product9.png" alt="" />
            <button>Drive</button>
          </div>
          <button className="seeMore">See More</button>
        </div>
      </section>

      <section className="discount">
        <div className="descountContainer">
          <div className="discountInfoLeft">
            <h3>Every Computer and laptop</h3>
            <h1>Up to 40% off !</h1>
            <button>Shop Now</button>
          </div>

          <div className="discountInfoRight">
            <img src="/Images/pc.png" alt="" />
          </div>
        </div>
      </section>

      <section className="customerReview">
        <div className="custumerContainer">
          <div className="title-customer">
            <h3 style={{ fontSize: 33, textAlign:'center'}}>CUSTOMER REVIEW</h3>
          </div>
          <div className="custumerInfo">
            <img src="/Images/cos.png" alt="" />
            <strong>Sandy Miller</strong>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id
            </p>
          </div>
        </div>
      </section>

      <section className="formu-contact">
        <div className="title" style={{color:'#fff'}}>
          <h3 className="h3-formu" >CONTACT NOW</h3>
        </div>
        <div className="formulario">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Message" />
            <button>SEND</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
